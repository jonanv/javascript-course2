import { obtenerCliente } from "./API.js";

(function() {
    const idInput = document.querySelector('#id');
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    document.addEventListener('DOMContentLoaded', async () => {

        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        
        if (idCliente) {
            const cliente = await obtenerCliente(idCliente);
            mostrarCliente(cliente);
        }
    });

    function mostrarCliente(cliente) {
        const { id, nombre, email, telefono, empresa } = cliente;

        idInput.value = id;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }
})();