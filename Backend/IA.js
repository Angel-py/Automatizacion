
function optimizarRespuestasConIA(respuestasUsuario) {
  const apiKey = env_().GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;

  const prompt = `Actúa como consultor experto. Optimiza estas respuestas para un plan estratégico: ${JSON.stringify(respuestasUsuario)}. 
  IMPORTANTE: Responde ÚNICAMENTE con el objeto JSON. No digas "Aquí tienes", no saludes, ni uses bloques de código Markdown. Solo el JSON puro que empiece con { y termine con }.`;

  const payload = {
    "contents": [{ "parts": [{ "text": prompt }] }]
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
    
    if (resJson.candidates && resJson.candidates[0].content) {
      let textoIA = resJson.candidates[0].content.parts[0].text.trim();
      
      
      const inicio = textoIA.indexOf('{');
      const fin = textoIA.lastIndexOf('}') + 1;
      
      if (inicio !== -1 && fin !== -1) {
        const jsonPuro = textoIA.substring(inicio, fin);
        return JSON.parse(jsonPuro);
      }
    }
    return respuestasUsuario;
  } catch (e) {
      console.error("Error en IA: " + e.message);
      // IMPORTANTE: Devolvemos el objeto original para que el Sheet tenga contenido
      return respuestasUsuario; 
    }
}