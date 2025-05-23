document.addEventListener('DOMContentLoaded', function() {
    const form = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCc = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    const btnEnviar = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');

    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputCc.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', (e) => {
        e.preventDefault();
        resetearFormulario();
    });

    // Funciones
    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        
        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetearFormulario();

            // Crear una alerta
            const alertaExito = document.createElement('p');
            alertaExito.textContent = 'El mensaje se envió correctamente';
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'uppercase');
            formulario.appendChild(alertaExito);
            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000);
    }

    function validar(e) {
        // Asignar los valores al objeto
        form[e.target.id] = e.target.value.trim();
        comprobarFormulario();

        const element = e.target;
        if (e.target.value.trim() === '' && e.target.id !== 'cc') {
            mostrarError(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            element.style.borderColor = 'red';
            return;
        }

        if (e.target.id === 'cc' && e.target.value.trim() !== '') {
            if (!validarEmail(e.target.value)) {
                mostrarError('Email no válido', e.target.parentElement);
                element.style.borderColor = 'red';
                return;
            }
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
        // Crear el mensaje de error
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('error', 'bg-red-600', 'text-white', 'p-2', 'rounded-lg');
        // Inyecta el error
        referencia.appendChild(error);
    }

    function limpiarError(referencia) {
        // Compruebar si ya existe un error
        const error = referencia.querySelector('.error');
        if (error) {
            referencia.removeChild(error);
        }
    }

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return regex.test(String(email).toLowerCase());
    }

    function comprobarFormulario() {
        let fieldsRequired = Object.fromEntries(
            Object.entries(form).filter(([key, value]) => key !== 'cc')
        );
        
        if (Object.values(fieldsRequired).includes('')) {
            btnEnviar.classList.add('opacity-50');
            btnEnviar.disabled = true;
            return;
        }
        btnEnviar.classList.remove('opacity-50');
        btnEnviar.disabled = false;
    }

    function resetearFormulario() {
        // Reiniciar el objeto
        form.email = '';
        form.asunto = '';
        form.mensaje = '';

        for (const element in form) {
            // console.log(formulario.elements[element]);
            formulario.elements[element].style.borderColor = 'rgb(209 213 219 / var(--tw-border-opacity))';
        }

        // Reiniciar el formulario
        formulario.reset();

        // Deshabilitar el botón
        comprobarFormulario();
    }
});