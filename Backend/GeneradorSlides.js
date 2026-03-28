function testInyeccionSlide() {
  
  const ID_PLANTILLA = PropertiesService.getScriptProperties().getProperty('ID_PLANTILLA_SLIDES');
  
  if (!ID_PLANTILLA) {
     console.error("Error Arquitectónico: Falta configurar ID_PLANTILLA_SLIDES en Propiedades del Script");
     return;
  }
  
  Logger.log("Iniciando prueba de concepto (PoC) aislada...");
  
  // 2. Agarramos la plantilla y hacemos la copia intocable
  const plantilla = DriveApp.getFileById(ID_PLANTILLA);
  const carpeta = DriveApp.getRootFolder();
  
  const fechaHoy = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm");
  const nombreArchivo = "TEST Arquitectura - " + fechaHoy;
  
  Logger.log("1. Copiando archivo...");
  const nuevaPresen = plantilla.makeCopy(nombreArchivo, carpeta);
  
  // 3. Entramos al archivo y probamos la inyección de 1 solo dato
  Logger.log("2. Abriendo copia e inyectando dato atómico...");
  const slideEditado = SlidesApp.openById(nuevaPresen.getId());
  
  slideEditado.replaceAllText('{{FECHA}}', fechaHoy);
  
  // 4. Cerramos la puerta
  slideEditado.saveAndClose();
  Logger.log("¡TEST SUPERADO! Diapositiva aislada generada: " + nuevaPresen.getUrl());
}

// -------------------------------------------------------------
// Función prinpical (Mantenida acá abajo para cuando la apruebes)
// -------------------------------------------------------------
function generarPresentacionDeUltimaFila() {
  const ID_PLANTILLA = PropertiesService.getScriptProperties().getProperty('ID_PLANTILLA_SLIDES');
  
  if (!ID_PLANTILLA) return console.error("Falta ID_PLANTILLA_SLIDES");
  
  const idSheet = env_().ID_SHEET;
  const excel = SpreadsheetApp.openById(idSheet);
  const hoja = excel.getSheets()[0]; // Selecciona la primera pestaña de la hoja de cálculo
  const ultimaFila = hoja.getLastRow();
  
  if (ultimaFila < 2) return console.log("No hay datos");
  
  const datosUltimaFila = hoja.getRange(ultimaFila, 1, 1, hoja.getLastColumn()).getValues()[0];
  
  // Parseo específico y quirúrgico para el FODA
  let fodaOp = "N/A";
  let fodaAm = "N/A";
  try {
    if (datosUltimaFila[3]) {
      const parsedFoda = JSON.parse(String(datosUltimaFila[3]).trim());
      // Si fue un objeto directo
      if (parsedFoda.Oportunidad) fodaOp = parsedFoda.Oportunidad;
      if (parsedFoda.Amenaza) fodaAm = parsedFoda.Amenaza;
      
      // Si por alguna razón Gemini devolvió un array [ {Oportunidad:...}, {Amenaza:...} ]
      if (Array.isArray(parsedFoda)) {
         fodaOp = parsedFoda.map(i => i.Oportunidad).filter(Boolean).map(t => '• ' + t).join('\n') || "N/A";
         fodaAm = parsedFoda.map(i => i.Amenaza).filter(Boolean).map(t => '• ' + t).join('\n') || "N/A";
      }
    }
  } catch(e) { /* Si no es JSON lo dejamos ir */ }
  
  const datosMapa = {
    '{{FECHA}}': datosUltimaFila[0],
    '{{DIAGNOSTICO_1}}': datosUltimaFila[1],
    '{{TEST_1}}': datosUltimaFila[2],
    '{{OPORTUNIDAD}}': fodaOp,
    '{{AMENAZA}}': fodaAm,
    '{{DIAGNOSTICO_2}}': datosUltimaFila[4],
    '{{TEST_2}}': datosUltimaFila[5],
    '{{BUYER_PERSONA}}': datosUltimaFila[6],
    '{{MAPA_EMPATIA}}': datosUltimaFila[7],
    '{{MAPA_EXPERIENCIA}}': datosUltimaFila[8],
    '{{LIENZO_NEGOCIO}}': datosUltimaFila[9],
    '{{LIENZO_TRANSFORMACION}}': datosUltimaFila[10],
    '{{HERRAMIENTAS}}': datosUltimaFila[11],
    '{{OBJETIVOS}}': datosUltimaFila[12],
    '{{PLAN_ACCION}}': datosUltimaFila[13],
    '{{MATRIZ_PRIORIZACION}}': datosUltimaFila[14],
    '{{INVERSION}}': datosUltimaFila[15],
    '{{GESTION_CAMBIO}}': datosUltimaFila[16],
    '{{FORMACION}}': datosUltimaFila[17]
  };

  const plantilla = DriveApp.getFileById(ID_PLANTILLA);
  const carpeta = DriveApp.getRootFolder();
  
  const fechaGeneracion = datosUltimaFila[0] instanceof Date ? Utilities.formatDate(datosUltimaFila[0], Session.getScriptTimeZone(), "dd/MM/yyyy") : "Reciente";
  const nuevaPresen = plantilla.makeCopy("Plan Transformación Digital - " + fechaGeneracion, carpeta);
  const slideEditado = SlidesApp.openById(nuevaPresen.getId());
  
  for (const [placeholder, valor] of Object.entries(datosMapa)) {
      slideEditado.replaceAllText(placeholder, formatearValorParaSlide(valor));
  }
  
  slideEditado.saveAndClose();
  console.log("Diapositiva final generada: " + nuevaPresen.getUrl());
}

// -------------------------------------------------------------
// Función Auxiliar: Parsea JSON y anida viñetas prolijamente
// -------------------------------------------------------------
function formatearValorParaSlide(valorBruto) {
  if (valorBruto === null || valorBruto === undefined || valorBruto === '') return "N/A";
  
  if (valorBruto instanceof Date) {
    return Utilities.formatDate(valorBruto, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm");
  }
  
  let textoString = String(valorBruto).trim();
  
  // Detectar heurísticamente si es texto en formato JSON
  if ((textoString.startsWith('{') && textoString.endsWith('}')) || 
      (textoString.startsWith('[') && textoString.endsWith(']'))) {
    try {
      const objeto = JSON.parse(textoString);
      return procesarJsonRecursivo(objeto);
    } catch (e) {
       return textoString; // Si el parseo falla, devuelve el string original crudo
    }
  }
  return textoString;
}

function procesarJsonRecursivo(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => {
      if (typeof item === 'object' && item !== null) {
        let bloque = '';
        for (const [key, value] of Object.entries(item)) {
           // Si el value anidado de vuelta es objeto, no quiero que explote, uso String
           bloque += `▪ ${key}:\n  ↳ ${typeof value === 'object' ? JSON.stringify(value) : value}\n`;
        }
        return bloque;
      }
      return `• ${item}`;
    }).join('\n');
  } 
  
  if (typeof obj === 'object' && obj !== null) {
     let bloque = '';
     for (const [key, value] of Object.entries(obj)) {
       bloque += `• ${key}:\n  ↳ ${typeof value === 'object' ? JSON.stringify(value) : value}\n\n`;
     }
     return bloque.trim();
  }
  
  return String(obj);
}
