// No se puede usar el objecto window

// Cuando se instala el service worker, solo se ejecuta una sola vez hasta que es instalado
self.addEventListener('install', (e) => {
    console.log('Instalando el service worker');
    console.log(e);
});

// Activar el service worker
self.addEventListener('activate', (e) => {
    console.log('Service worker activado');
    console.log(e);
});