// Notification API
// Permite mostrar notificaciones al usuario, incluso si la página no está abierta.
// Se utiliza para mostrar alertas, recordatorios, etc.

const btnNotificar = document.querySelector('#notificar');

btnNotificar.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then((response) => console.log(`El resultado es: ${response}`));
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Código con Juan, aprnde con proyectos reales',
        });

        notificacion.onclick = function() {
            window.open('https://www.codigoconjuan.com');
        }
    }
});