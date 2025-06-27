const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if (terminoBusqueda.trim() === '') {
        mostrarAlerta('Agrega un termino de búsqueda');
        return;
    }
}

function mostrarAlerta(mensaje) {
    // Eliminar alertas duplicadas
    const alertaPrevia = document.querySelector('.alerta');
    alertaPrevia?.remove();

    const alerta = document.createElement('P');
    alerta.classList.add('alerta', 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    alerta.innerHTML = `
        <strong class="block font-bold">Error!</strong>
        <span class="block sm:inline">${ mensaje }</span>
    `;

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}