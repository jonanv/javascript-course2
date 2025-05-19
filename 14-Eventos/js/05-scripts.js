// Eventos al dar scroll con el mouse

addEventListener('scroll', () => {
    // console.log('Has hecho scroll');
    // let scrollPixels = window.scrollY;
    // console.log(scrollPixels);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // Obtenemos la ubicacion del elemento premium
    // console.log(ubicacion);

    if (ubicacion.top < 500) {
        console.log('El elemento ya es visible');
    } else {
        console.log('El elemento no es visible');
    }
});
