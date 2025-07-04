let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Revisar si hay campos vacios
    const camposVacios = [ mesa, hora ].some((campo) => campo === '');

    if (camposVacios) {
        mostrarAlerta('Los campos son obligatorios');
        return;
    }

    // Asignar datos del formulario
    cliente = { ...cliente, mesa, hora };

    // Oculatar modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    mostrarSecciones();
    obtenerPlatillos();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach((seccion) => seccion.classList.remove('d-none'));
}

function obtenerPlatillos() {
    const DOMINIO = 'http://localhost';
    const PUERTO = ':4000';
    const ENDPOINT = '/platillos';
    const URL = `${ DOMINIO }${ PUERTO }${ ENDPOINT }`;

    fetch(URL)
        .then((response) => response.json())
        .then((platillos) => mostrarPlatillos(platillos))
        .catch((error) => console.error(error))
}

function mostrarPlatillos(platillos) {
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach((platillo) => {
        const { id, nombre, categoria, precio } = platillo;

        const row = document.createElement('DIV');
        row.classList.add('row', 'py-3', 'border-top');

        const nombreDiv = document.createElement('DIV');
        nombreDiv.classList.add('col-md-4');
        nombreDiv.textContent = nombre;

        const precioDiv = document.createElement('DIV');
        precioDiv.classList.add('col-md-3', 'fw-bold');
        precioDiv.textContent = `$${ precio }`;

        const categoriaDiv = document.createElement('DIV');
        categoriaDiv.classList.add('col-md-3');
        categoriaDiv.textContent = categorias[categoria];

        row.appendChild(nombreDiv);
        row.appendChild(precioDiv);
        row.appendChild(categoriaDiv);

        contenido.appendChild(row);
    });
}

function mostrarAlerta(mensaje) {
    const alertaPrevia = document.querySelector('.alerta');
    alertaPrevia?.remove();
    
    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta', 'invalid-feedback', 'd-block', 'text-center');
    alerta.textContent = mensaje;
    
    const formulario = document.querySelector('.modal-body form');
    formulario.append(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}