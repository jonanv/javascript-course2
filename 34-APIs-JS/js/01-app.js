// Notification API

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