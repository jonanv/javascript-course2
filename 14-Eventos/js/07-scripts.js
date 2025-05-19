// Prevenir el Event Bubbling con Delegation (Delegación)

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    // console.log(e.target); // Muestra el elemento que disparó el evento
    // console.log(e.target.classList); // Muestra la lista de clases del elemento que disparó el evento

    if (e.target.classList.contains('titulo')) {
        console.log('Click en titulo');
    }

    if (e.target.classList.contains('info')) {
        console.log('Click en info');
    }

    if (e.target.classList.contains('card')) {
        console.log('Click en card');
    }
});