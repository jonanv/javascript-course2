// Que es el Event Bubbling?
// Los eventos se propagan como una burbuja.
// Es cuando presionsa un elemento y se propaga hacia arriba en los elementos padres.
// El evento burbujea hacia arriba en el DOM.

// El Event Bubbling es un mecanismo de propagación de eventos en el DOM
// que permite que un evento se propague desde el elemento más específico (el objetivo del evento)
// hasta el elemento más general (el contenedor del objetivo).
// En otras palabras, cuando un evento ocurre en un elemento hijo, el evento se "burbujea" hacia arriba
// a través de la jerarquía del DOM, activando los controladores de eventos en cada elemento padre
// a lo largo del camino.

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    // stopPropagation evita el Event Bubbling
    e.stopPropagation(); // Detiene la propagación del evento hacia los elementos padres
    console.log('Click en cardDiv');
});

infoDiv.addEventListener('click', (e) => {
    // stopPropagation evita el Event Bubbling
    e.stopPropagation(); // Detiene la propagación del evento hacia los elementos padres
    console.log('Click en infoDiv');
});

titulo.addEventListener('click', (e) => {
    // stopPropagation evita el Event Bubbling
    e.stopPropagation(); // Detiene la propagación del evento hacia los elementos padres
    console.log('Click en titulo');
});