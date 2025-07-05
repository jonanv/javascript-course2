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
    limpiarHTML();

    // Actualizar resumen
    actualizarResumen();
}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');

    // Informacion de la mesa
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    // Información de la hora
    const hora = document.createElement('P');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    // Agregar los elementos al padre
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    // Título de la sección
    const titulo = document.createElement('H3');
    titulo.textContent = 'Platillos consumidos';
    titulo.classList.add('my-4', 'text-center');

    // Iterar sobre el array de pedidos
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const { pedido } = cliente;
    pedido.forEach((producto) => {
        const { id, nombre, cantidad, precio } = producto;

        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        // Nombre
        const nombreEl = document.createElement('H4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent = nombre;

        // Cantidad
        const cantidadEl = document.createElement('P');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('SPAN');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        cantidadEl.appendChild(cantidadValor);

        // Precio
        const precioEl = document.createElement('P');
        precioEl.classList.add('fw-bold');
        precioEl.textContent = 'Precio: ';

        const precioValor = document.createElement('SPAN');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$${ precio }`;

        precioEl.appendChild(precioValor);

        // Subtotal
        const subtotalEl = document.createElement('P');
        subtotalEl.classList.add('fw-bold');
        subtotalEl.textContent = 'Subtotal: ';

        const subtotalValor = document.createElement('SPAN');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(precio, cantidad);

        subtotalEl.appendChild(subtotalValor);

        // Boton para eliminar
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = 'Eliminar del pedido';
        // Event handler
        btnEliminar.onclick = function() {
            eliminarProducto(id);
        }

        // Agregar elementos al LI
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotalEl);
        lista.appendChild(btnEliminar);

        // Agregar lista al grupo principal
        grupo.appendChild(lista);
    });

    // Agregar contenido
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(titulo);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);
}

function eliminarProducto(id) {
    const { pedido } = cliente;
    const nuevoPedido = pedido.filter((producto) => producto.id !== id);
    cliente.pedido = [...nuevoPedido];

    // Limpiar contenido
    limpiarHTML();

    // Actualizar resumen
    actualizarResumen();
}

function calcularSubtotal(precio, cantidad) {
    return `$${ precio * cantidad }`
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

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido');
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}