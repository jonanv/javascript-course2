// Async await hacia una API con fetch
const URL = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

// Promises
function obtenerDatos() {
    fetch(URL)
        .then((response) => response.json())
        .then(console.log)
        .catch(console.error)
}

// Async await
async function obtenerDatos() {
    try {
        const respuesta = await fetch(URL);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}