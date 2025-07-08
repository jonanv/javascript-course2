import { actulizarCliente, obtenerCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function() {
    const idInput = document.querySelector('#id');
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', async () => {

        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        
        if (idCliente) {
            const cliente = await obtenerCliente(idCliente);
            mostrarCliente(cliente);
        }

        formulario.addEventListener('submit', enviarFormulario);
    });

    function mostrarCliente(cliente) {
        const { id, nombre, email, telefono, empresa } = cliente;

        idInput.value = id;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

    function enviarFormulario(e) {
        e.preventDefault();

        const id = parseInt(idInput.value);
        const nombre = nombreInput.value;
        const email = emailInput.value;
        const telefono = telefonoInput.value;
        const empresa = empresaInput.value;

        const cliente = {
            id,
            nombre,
            email,
            telefono,
            empresa,
        };

        if (validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        actulizarCliente(cliente);
    }
})();