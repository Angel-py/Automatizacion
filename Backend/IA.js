function optimizarRespuestasConIA(respuestasUsuario) {
  
  const config = env_(); 
  const apiKey = config.GEMINI_API_KEY; 
  const preguntas = obtenerPreguntas();
  const respuestasOptimizadas = {};
  
  
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;


  let contextoGlobal = "Actúa como Consultor Estratégico Senior experto en Transformación Digital.\n";
  contextoGlobal += "Tu tarea es tomar las respuestas de un diagnóstico empresarial y transformarlas en respuestas profesionales, redactadas con un tono ejecutivo y estratégico.\n\n";
  contextoGlobal += "REGLAS DE PROCESAMIENTO:\n";
  contextoGlobal += "- Si recibes un JSON de tabla o matriz, sintetiza los hallazgos en un párrafo profesional.\n";
  contextoGlobal += "- Si recibes un Business Model Canvas, redacta un análisis estratégico de ese modelo.\n";
  contextoGlobal += "- No inventes datos que no estén en la respuesta original, solo eleva el lenguaje.\n\n";
  
  contextoGlobal += "REGLA DE SALIDA ESTRICTA: Responde ÚNICAMENTE con un objeto JSON plano donde las llaves sean los IDs (del 1 al 17) en formato string, y el valor sea el texto de la respuesta optimizada.\n\n";

  // 2. Construcción del Prompt con limpieza de datos
  preguntas.forEach(p => {
    let original = respuestasUsuario[p.id] || respuestasUsuario[String(p.id)];
    
    if (original && original !== "" && original !== "[]" && original !== "{}") {
      // Si es un objeto/array (Tablas o Canvas), lo formateamos para que la IA lo entienda mejor
      let representacionTexto = "";
      if (typeof original === 'string' && (original.startsWith('{') || original.startsWith('['))) {
        try {
          const parsed = JSON.parse(original);
          representacionTexto = JSON.stringify(parsed, null, 2);
        } catch(e) { representacionTexto = original; }
      } else {
        representacionTexto = original;
      }

      contextoGlobal += `--- PREGUNTA ID ${p.id} (${p.titulo || 'Sin Título'}) ---\n`;
      contextoGlobal += `RESPUESTA DEL USUARIO:\n${representacionTexto}\n\n`;
    }
  });

  const payload = {
    "contents": [{
      "parts": [{
        "text": `${contextoGlobal}\n\nIMPORTANTE: Devuelve solo el JSON puro. Sin bloques de código, sin texto adicional.`
      }]
    }]
  };

  try {
    const response = UrlFetchApp.fetch(url, {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload),
      "muteHttpExceptions": true 
    });

    const resText = response.getContentText();
    const resJson = JSON.parse(resText);

    if (!resJson.candidates || !resJson.candidates[0].content) {
      throw new Error("La API no devolvió contenido válido.");
    }

    let textoLimpio = resJson.candidates[0].content.parts[0].text.trim();
    
    // Limpieza agresiva de Markdown
    textoLimpio = textoLimpio.replace(/^```json\s*/, "").replace(/```$/, "").trim();
    
    // Asegurar que solo procesamos el JSON si hay texto basura alrededor
    const inicioJson = textoLimpio.indexOf('{');
    const finJson = textoLimpio.lastIndexOf('}') + 1;
    if (inicioJson !== -1 && finJson !== -1) {
       textoLimpio = textoLimpio.substring(inicioJson, finJson);
    }

    const objetoIA = JSON.parse(textoLimpio);

    // 3. Mapeo final de respuestas
    preguntas.forEach(p => {
      // Buscamos la respuesta en el JSON de la IA
      const optimizada = objetoIA[p.id] || objetoIA[String(p.id)];
      
      if (optimizada) {
        respuestasOptimizadas[p.id] = optimizada;
      } else {
        // Si la IA no la procesó pero había respuesta original, mantenemos la original
        let original = respuestasUsuario[p.id];
        respuestasOptimizadas[p.id] = original ? `(Original) ${original}` : "Sin respuesta";
      }
    });
    
    return respuestasOptimizadas;

  } catch (e) {
    console.error("Fallo en procesamiento de IA: " + e.message);
    // Fallback: devolver originales si todo falla
    preguntas.forEach(p => {
      let val = respuestasUsuario[p.id];
      respuestasOptimizadas[p.id] = val ? String(val) : "";
    });
    return respuestasOptimizadas;
  }
}