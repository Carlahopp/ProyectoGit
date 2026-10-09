function simularPitStop() {
    // Genera un tiempo aleatorio con Math.random casi realista entre el récord de red bull y el resto de los equipos.
    const tiempo = (Math.random() * (4.5 - 1.8) + 1.8).toFixed(2);
    
    // Un divertido pop-up en pantalla
    alert(`🏁 ¡Parada en Boxes Completada!\nTu equipo de mecánicos cambió los neumáticos en: ${tiempo} segundos.`);
}