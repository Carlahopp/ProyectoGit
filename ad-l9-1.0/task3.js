// Esperamos a que el usuario presione el botón de análisis
document.querySelector("#btn-analizar").addEventListener("click", () => {
    // 1. Selecciona todos los elementos de tipo enlace (a) de la página
    const todosLosEnlaces = document.querySelectorAll("a");
    
    // 2. Extrae la información solicitada en la Tarea 3
    const cantidadTotal = todosLosEnlaces.length;
    const primerEnlaceUrl = todosLosEnlaces[0].href;
    const ultimoEnlaceUrl = todosLosEnlaces[todosLosEnlaces.length - 1].href;
    
    // 3. Muestra los datos recopilados exactamente en una alerta
    alert(
        `📊 Información sobre Enlaces:\n\n` +
        `• Número total de enlaces: ${cantidadTotal}\n` +
        `• Primer enlace de la página: ${primerEnlaceUrl}\n` +
        `• Último enlace de la página: ${ultimoEnlaceUrl}`
    );
});
