function onOpen() {
  let ui = SlidesApp.getUi();
  ui.createMenu('Formulario')
    .addItem('Abrir Formulario', 'mostrarFormulario')
    .addSeparator()
    .addToUi();
}

function doGet(e) {
  try {
    return HtmlService
    .createTemplateFromFile('Frontend/Index')
    .evaluate()
    .setTitle('Formulario - Plan de Transformación Digital')
    .setFaviconUrl('https://eadic.com/favicon.ico')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode);
  }
  catch (err) {
    return HtmlService.createHtmlOutput("Error al cargar el archivo: " + err.toString());
  }
}

function mostrarFormulario() {
  try {

    let urlPublicada = env_().URL_PROYECTO;


    if (!urlPublicada) {
      SlidesApp.getUi().alert("Error: Primero debes desplegar el script como 'Aplicación Web'.");
      return;
    }

    const html = HtmlService.createHtmlOutput(
      `<html>
          <body style="font-family: sans-serif; text-align: center; padding: 20px;">
            <p>El formulario de IA está listo.</p>
            <a href="${urlPublicada}" target="_blank" 
              style="background-color: #4285f4; color: white; padding: 10px 20px; 
                      text-decoration: none; border-radius: 4px; font-weight: bold;"
              onclick="google.script.host.close()">
               IR AL FORMULARIO
            </a>
          </body>
        </html>`
    )
      .setWidth(300)
      .setHeight(150);

    SlidesApp.getUi().showModalDialog(html, "Asistente de Transformación");
  } catch (error) {
    console.error("Error al mostrar el formulario: " + error.message);
    SlidesApp.getUi().alert("No se pudo cargar el archivo Frontend/Index. Revisa el nombre.");
  }
}

function include(filename) {
  try {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  } catch (error) {
    console.log(error);
  }
}