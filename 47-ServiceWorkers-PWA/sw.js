// Para que una PWA se pueda instalar
// 1. Tener un manifest valido
// 2. Tener un dominio https o ser un localhost
// 3. Tener registrado el eventListener de fetch

// Manifest
// En JavaScript, un manifiesto es un archivo en formato JSON que proporciona información sobre una aplicación web progresiva (PWA) y cómo debe ser tratada por el navegador, especialmente cuando se instala en el dispositivo del usuario. Este archivo, generalmente llamado manifest.json o site.webmanifest, describe aspectos como el nombre de la aplicación, los iconos, la orientación preferida, el color del tema, la URL de inicio y otros metadatos relevantes. 


// No se puede usar el objecto window por eso se usa self

const nombreCache = 'apv-v1';
// Caching archivos para que funcione sin conexion a internet
const archivos = [
    './',
    './index.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js'
];

// Cuando se instala el service worker, solo se ejecuta una sola vez hasta que es instalado
self.addEventListener('install', (e) => {
    console.log('Instalando el service worker');
    // console.log(e);

    e.waitUntil(
        caches.open(nombreCache)
            .then((cache) => {
                console.log('Cacheando...');
                cache.addAll(archivos);
            })
            .catch((error) => console.error(error))
    );
});

// Activar el service worker
self.addEventListener('activate', (e) => {
    console.log('Service worker activado');
    console.log(e);
});

// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', (e) => {
    console.log('Fetch...', e);
});