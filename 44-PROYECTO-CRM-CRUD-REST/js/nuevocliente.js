import { nuevoCliente } from "./API.js";
import { mostrarAlerta } from "./funciones.js";

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
            mostrarAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        nuevoCliente(cliente);
    }

    function validar(obj) {
        return !Object.values(obj).every((prop) => prop.trim() !== '');
    }
})();