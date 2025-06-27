const urlCategorias = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const urlFiltro = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const urlRecepta = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';


document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp() {
    const PROTOCOLO = 'https://';
    const DOMINIO = 'www.themealdb.com';
    const PATH = '/api/json';
    const VERSION = '/v1';

    // Selectores
    const categoriasHTML = document.querySelector('#categorias');

    // Eventos
    categoriasHTML.addEventListener('change', seleccionarCategoria);

    obtenerCategorias();

    function obtenerCategorias() {
        const enpoint = '/1/categories.php';
        const URL = `${ PROTOCOLO }${ DOMINIO }${ PATH }${ VERSION }${ enpoint }`;

        fetch(URL)
            .then((response) => response.json())
            .then((categorias) => mostrarCategorias(categorias.categories))
            .catch((error) => console.error(error));
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach((categoria) => {
            const { idCategory, strCategory } = categoria;

            const opcion = document.createElement('OPTION');
            opcion.dataset.id = idCategory;
            opcion.value = strCategory;
            opcion.textContent = strCategory;
            categoriasHTML.appendChild(opcion);
        });
    }

    function seleccionarCategoria(e) {
        let categoria = e.target.value;
        obtenerRecetas(categoria);
    }

    function obtenerRecetas(categoria) {
        const enpoint = `/1/filter.php?c=${ categoria }`;
        const URL = `${ PROTOCOLO }${ DOMINIO }${ PATH }${ VERSION }${ enpoint }`;

        fetch(URL)
            .then((response) => response.json())
            .then((recetas) => console.log(recetas.meals))
            .catch((error) => console.error(error));
    }
}
