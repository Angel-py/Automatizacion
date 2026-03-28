function guardarEnSheets(respuestasOptimizadas) {
  try {
    const ssId = env_().ID_SHEET;
    const ss = SpreadsheetApp.openById(ssId);
    let sheet = ss.getSheets()[0]; 

    
    if (sheet.getRange("A1").getValue() !== "Fecha / Hora") {
      sheet.clear(); 
      configurarEncabezados(sheet);
    }

    const preguntas = obtenerPreguntas();
    const nuevaFila = [new Date()]; 

   
    preguntas.forEach(p => {
      // Importante: tu ID es un número (1, 2, 3...)
      nuevaFila.push(respuestasOptimizadas[p.id] || "N/A");
    });

   
    sheet.appendRow(nuevaFila);
    
   
    sheet.autoResizeColumns(1, nuevaFila.length);
    sheet.getRange(sheet.getLastRow(), 1, 1, nuevaFila.length).setVerticalAlignment("middle");

  } catch (err) {
    console.error("Error crítico en Sheets: " + err.toString());
  }
}

function configurarEncabezados(sheet) {

  try {
    const preguntas = obtenerPreguntas();
      const encabezados = ["Fecha / Hora"];
      
      preguntas.forEach(p => {
        encabezados.push(p.texto); 
      });

    
      const range = sheet.getRange(1, 1, 1, encabezados.length);
      range.setValues([encabezados]);


      range.setBackground("#040025") 
          .setFontColor("white")
          .setFontWeight("bold")
          .setHorizontalAlignment("center")
          .setWrap(true); 
          
      sheet.setRowHeight(1, 45); 
      sheet.setFrozenRows(1);    
  } catch(error) {
    console.log(error)
  }


  
}