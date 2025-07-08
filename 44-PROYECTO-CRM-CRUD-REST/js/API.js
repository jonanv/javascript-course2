const DOMINIO = 'http://localhost';
const PUERTO = ':4000';
const ENDPOINT = '/clientes';
const URL = `${ DOMINIO }${ PUERTO }${ ENDPOINT }`;

// Crear nuevo cliente
export const nuevoCliente = async (cliente) => {
    try {
        await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.error(error);
    }
}

// Obtener todos los clientes
export const obtenerClientes = async () => {
    try {
        // const response = await fetch(URL, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        // No es necesario enviarle GET y los header porque se entiende que es un GET por defecto
        const response = await fetch(URL);
        const clientes = await response.json();
        return clientes;
    } catch (error) {
        console.error(error);
    }
}