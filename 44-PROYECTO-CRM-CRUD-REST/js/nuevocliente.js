(function() {
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        formulario.addEventListener('submit', validarCliente);
    });

    function validarCliente(e) {
        e.preventDefault();
        
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
        };

        if (validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        crearCliente(cliente);
    }

    function validar(obj) {
        return !Object.values(obj).every((prop) => prop.trim() !== '');
    }

    function crearCliente(cliente) {
        console.log(cliente);
    }

    function mostrarAlerta(mensaje) {
        const alertaPrevia = document.querySelector('.alerta');
        alertaPrevia?.remove();
        
        const alerta = document.createElement('DIV');
        alerta.classList.add('alerta');
        
        const alertaEl = document.createElement('P');
        alertaEl.classList.add();
        alertaEl.textContent = mensaje;

        alerta.appendChild(alertaEl);
        formulario.appendChild(alerta);
    }
})();