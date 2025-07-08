import { obtenerClientes } from "./API.js";

(function() {
    const listado = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', mostrarClientes);

    async function mostrarClientes() {
        const clientes = await obtenerClientes();
        console.log(clientes);
    }
})();