// Consultar un JSON

const btnCargarJSON = document.querySelector('#cargarJSON');
btnCargarJSON.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';

    fetch(url)
        .then((response) => {
            console.log(response);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.url);
            console.log(response.type);

            return response.json();
        })
        .then((datos) => {
            console.log(datos);
            mostrarHTML(datos);
        })
        .catch((error) => console.log(error));
}

function mostrarHTML({ empresa, id, nombre, trabajo }) {
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>Empresa: ${ empresa }</p>
        <p>Id: ${ id }</p>
        <p>Nombre: ${ nombre }</p>
        <p>Trabajo: ${ trabajo }</p>
    `;
}