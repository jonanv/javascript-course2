document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    });

    // Funciones
    function validar(e) {
        const element = e.target;
        if (e.target.value.trim() === '') {
            mostrarError(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            element.style.borderColor = 'red';
            return;
        }

        if (e.target.type === 'email') {
            if (!validarEmail(e.target.value)) {
                mostrarError('Email no válido', e.target.parentElement);
                element.style.borderColor = 'red';
                return;
            }
        }

        element.style.borderColor = 'green';
        limpiarError(e.target.parentElement);
    }

    function mostrarError(mensaje, referencia) {
        limpiarError(referencia);
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('error');
        error.style.color = 'red';
        referencia.appendChild(error);
    }

    function limpiarError(referencia) {
        const error = referencia.querySelector('.error');
        if (error) {
            referencia.removeChild(error);
        }
    }

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return regex.test(String(email).toLowerCase());
    }
});