// Consultar e imprimir resultados en un Fetch

const btnCargarJSONArray = document.querySelector('#cargarJSONArray');
btnCargarJSONArray.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then((response) => response.json())
        .then((datos) => mostrarHTML(datos))
        .catch((error) => console.log(error));
}

// Misma forma pero utilizando un async await
async function obtenerDatosAsync() {
    const url = 'data/empleados.json';

    const empleados = await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));

    console.log(empleados);
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach((empleado) => {
        const { empresa, id, nombre, trabajo } = empleado;

        html += `
            <p>Empresa: ${ empresa }</p>
            <p>Id: ${ id }</p>
            <p>Nombre: ${ nombre }</p>
            <p>Trabajo: ${ trabajo }</p>
        `;
    });

    contenido.innerHTML = html;
}