// Eventos con el Mouse

const nav = document.querySelector('.navegacion');

// Sobre la navegación
nav.addEventListener('mouseover', function() {
    console.log('Mouse sobre la navegación');
});

// Entrando a la navegación
nav.addEventListener('mouseenter', function() {
    console.log('Entrando a la navegación');
});

// Saliendo de la navegación
nav.addEventListener('mouseout', function() {
    console.log('Saliendo de la navegación');
});

// Salir de la navegación
nav.addEventListener('mouseleave', function() {
    console.log('Saliendo de la navegación');
});

// Entrando a la navegación, funciona como un click
nav.addEventListener('mousedown', function() {
    console.log('Entrando a la navegación');
});

// Funciona cuando sueltas el mouse
nav.addEventListener('mouseup', function() {
    console.log('Click y luego suelto el mouse');
});

// Doble click
nav.addEventListener('dblclick', function() {
    console.log('Doble click en la navegación');
});

// Click en la navegación
// nav.addEventListener('mousemove', function(e) {
//     console.log('Moviendo el mouse');
//     console.log(e);
//     console.log(e.clientX);
//     console.log(e.clientY);
// });

// Eventos de click
nav.addEventListener('click', function() {
    console.log('Click en la navegación');
});