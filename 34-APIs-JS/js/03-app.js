// Detectar si hay conexión a Internet
// Navigator Online
// Permite detectar si el usuario está conectado a Internet
// Se utiliza para mostrar mensajes de error, cargar contenido, etc.
// Este código detecta si el usuario está conectado a Internet y muestra un mensaje en la consola
// y en la página web cuando se conecta o se desconecta de Internet.
// También se puede utilizar para cargar contenido de forma diferida cuando el usuario está conectado a Internet

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    console.log('aca');
    if (navigator.onLine) {
        console.log('Si estas conectado');
    } else {
        console.log('No estas conectado...');
    }
}

// addEventListener version
window.addEventListener('online', (event) => {
    console.log("Ahora estás conectado a la red.");
});

// handler version
window.ononline = (event) => {
    console.log("Ahora estás conectado a la red.");
};


// addEventListener version
window.addEventListener('offline', (event) => {
    console.log("Se ha perdido la conexión de red.");
});

// handler version
window.onoffline = (event) => {
    console.log("Se ha perdido la conexión de red.");
};