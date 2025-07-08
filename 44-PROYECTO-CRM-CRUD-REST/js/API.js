const DOMINIO = 'http://localhost';
const PUERTO = ':4000';
const ENDPOINT = '/clientes';
const URL = `${ DOMINIO }${ PUERTO }${ ENDPOINT }`;

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