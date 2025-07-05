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

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.classList.add('form-control');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.id = `product-${ id }`;
        inputCantidad.value = 0;

        // Función que detecta la cantidad y el platillo que se esta agregando
        // No se usa addEventListener porque no se puede agregar un evento a un elemento que aún no existe en el DOM
        // Event handler
        inputCantidad.onchange = function() {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({ ...platillo, cantidad });
        };

        const agregarDiv = document.createElement('DIV');
        agregarDiv.classList.add('col-md-2');

        agregarDiv.appendChild(inputCantidad);

        row.appendChild(nombreDiv);
        row.appendChild(precioDiv);
        row.appendChild(categoriaDiv);
        row.appendChild(agregarDiv);

        contenido.appendChild(row);
    });
}

function agregarPlatillo(producto) {
    // Extraer pedido
    let { pedido } = cliente;

    // Revisar que la cantidad sea mayor a cero
    if (producto.cantidad > 0) {
        let exiteProducto = cliente.pedido.some((p) => p.id === producto.id);
        if (exiteProducto) {
            const p = cliente.pedido.find((p) => p.id === producto.id);
            p.cantidad = producto.cantidad;
        } else {
            cliente.pedido = [...pedido, producto];
        }
    } else {
        const nuevoPedido = cliente.pedido.filter((p) => p.id !== producto.id);
        cliente.pedido = [...nuevoPedido];
    }

    // Limpiar contenido
    const contenido = document.querySelector('#resumen .contenido');
    limpiarHTML(contenido);

    // Actualizar resumen
    actualizarResumen();
}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6');

    // Informacion de la mesa
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    // Informacion de la hora
    const hora = document.createElement('P');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    contenido.appendChild(mesa);
    contenido.appendChild(hora);
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

function limpiarHTML(selector) {
    while (selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}