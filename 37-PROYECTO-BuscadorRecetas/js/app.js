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
    const resultadoHTML = document.querySelector('#resultado');

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
            .then((recetas) => {
                limpiarHTML();
                mostrarRecetas(recetas.meals);
            })
            .catch((error) => console.error(error));
    }

    function mostrarRecetas(recetas = []) {
        recetas.forEach((receta) => {
            const { idMeal, strMeal, strMealThumb } = receta;

            const contenedorRecetas = document.createElement('DIV');
            contenedorRecetas.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${ strMeal }`;
            recetaImagen.src = strMealThumb;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver receta';

            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            contenedorRecetas.appendChild(recetaCard);

            resultadoHTML.appendChild(contenedorRecetas);
        });
    }

    function limpiarHTML() {
        while (resultadoHTML.firstChild) {
            resultadoHTML.removeChild(resultadoHTML.firstChild);
        }
    }
}
