let cliente = {
    mesa: '',
    hora: '',
    pedido: []
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
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach((seccion) => seccion.classList.remove('d-none'));
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