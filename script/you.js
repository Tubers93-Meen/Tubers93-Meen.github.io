const startBtn = document.getElementById('start-btn');
const introScreen = document.getElementById('intro-screen');
const videoContainer = document.getElementById('video-container');
const idiotVideo = document.getElementById('idiot-video');
const idiotAudio = document.getElementById('idiot-audio');

// Al hacer clic en el botón de reproducción grande
startBtn.addEventListener('click', () => {
    // Ocultar pantalla de inicio y mostrar el contenedor del video
    introScreen.style.display = 'none';
    videoContainer.style.display = 'flex';
    
    // Forzar la reproducción directa e imparable de ambos elementos
    idiotAudio.play().catch(error => console.log("Error al reproducir audio:", error));
    idiotVideo.play().catch(error => console.log("Error al reproducir video:", error));
});

// Bloquear únicamente el menú de clic derecho sobre la web para mitigar descargas fáciles
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
