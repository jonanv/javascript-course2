// Como utilizar Fetch API

const btnCargarTxt = document.querySelector('#cargarTxt');
btnCargarTxt.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';

    fetch(url)
        .then((response) => {
            console.log(response);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.url);
            console.log(response.type);

            return response.text();
        })
        .then((datos) => {
            console.log(datos);
        })
        .catch((error) => console.log(error));

}