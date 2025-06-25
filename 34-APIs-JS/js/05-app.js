// Detectar cuando estamos viendo la pagina web actual

document.addEventListener('visibilitychange', detectarVisibilidad);

function detectarVisibilidad() {
    if (document.visibilityState === 'visible') {
        console.log('Ejecutar la funcion para reproducir el video');
    } else {
        console.log('Pausar el video');
    }
}