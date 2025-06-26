const urlCategorias = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const urlFiltro = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const urlRecepta = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';


document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp() {
    const PROTOCOLO = 'https://';
    const DOMINIO = 'www.themealdb.com';
    const PATH = '/api/json';
    const VERSION = '/v1';

    obtenerCategorias();

    function obtenerCategorias() {
        const enpoint = '/1/categories.php';
        const URL = `${ PROTOCOLO }${ DOMINIO }${ PATH }${ VERSION }${ enpoint }`;

        fetch(URL)
            .then((response) => response.json())
            .then((categorias) => mostrarCategorias(categorias.categories))
            .catch((error) => console.error(error));
    }

    function mostrarCategorias(categorias) {
        console.log(categorias);
        const categoriasHTML = document.querySelector('#categorias');
        
        categorias.forEach((categoria) => {
            const opcion = document.createElement('option');
            opcion.value = categoria.idCategory;
            opcion.textContent = categoria.strCategory;
            categoriasHTML.appendChild(opcion);
        });

    }
}
