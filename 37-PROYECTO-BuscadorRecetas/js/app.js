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
            .then((recetas) => mostrarRecetas(recetas.meals))
            .catch((error) => console.error(error));
    }

    function mostrarRecetas(recetas = []) {
        limpiarHTML(resultadoHTML);

        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados';
        resultadoHTML.appendChild(heading);

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
            recetaButton.dataset.bsTarget = '#modal';
            recetaButton.dataset.bsToggle = 'modal';
            // Event handler
            // Si lo usas como callback, espera que ocurra el evento onclick y con function previene a que ocurra el evento onclick
            recetaButton.onclick = function() {
                obtenerReceta(idMeal);
            }

            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            contenedorRecetas.appendChild(recetaCard);

            resultadoHTML.appendChild(contenedorRecetas);
        });
    }

    function obtenerReceta(idMeal) {
        const enpoint = `/1/lookup.php?i=${ idMeal }`;
        const URL = `${ PROTOCOLO }${ DOMINIO }${ PATH }${ VERSION }${ enpoint }`;

        fetch(URL)
            .then((response) => response.json())
            .then((receta) => mostrarReceta(receta.meals[0]))
            .catch((error) => console.error(error));
    }

    function mostrarReceta(receta) {
        console.log(receta);
    }

    function limpiarHTML(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }
}
