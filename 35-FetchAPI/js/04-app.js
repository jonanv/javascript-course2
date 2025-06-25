// Consultar e imprimir los resultados de una API

const btnCargarAPI = document.querySelector('#cargarAPI');
btnCargarAPI.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then((response) => response.json())
        .then((datos) => mostrarHTML(datos))
        .catch((error) => console.log(error));
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    datos.forEach((perfil) => {
        const { author, post_url } = perfil;
        html += `
            <p>Author: ${ author }</p>
            <a href='${ post_url }' target='_black'>Ver imagen</a>
        `;
    });

    contenido.innerHTML = html;
}