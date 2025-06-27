document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp() {
    const PROTOCOLO = 'https://';
    const DOMINIO = 'www.themealdb.com';
    const PATH = '/api/json';
    const VERSION = '/v1';

    // Selectores
    const categoriasHTML = document.querySelector('#categorias');
    const resultadoHTML = document.querySelector('#resultado');
    const modalHTML = new bootstrap.Modal('#modal', {});
    
    if (categoriasHTML) {
        // Eventos
        categoriasHTML.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }

    const favoritosDiv = document.querySelector('.favoritos');
    if (favoritosDiv) {
        obtenerFavoritos();
    }


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
            recetaImagen.src = strMealThumb ?? receta.imagen;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? receta.titulo;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver receta';
            // recetaButton.dataset.bsTarget = '#modal';
            // recetaButton.dataset.bsToggle = 'modal';
            // Event handler
            // Si lo usas como callback, espera que ocurra el evento onclick y con function previene a que ocurra el evento onclick
            recetaButton.onclick = function() {
                obtenerReceta(idMeal ?? receta.id);
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
            .then((receta) => mostrarRecetaModal(receta.meals[0]))
            .catch((error) => console.error(error));
    }

    function mostrarRecetaModal(receta) {
        const { idMeal, strInstructions, strMeal, strMealThumb } = receta;

        const modalTitle = document.querySelector('.modal .modal-title');
        modalTitle.textContent = strMeal;

        const modalBody = document.querySelector('.modal .modal-body');
        modalBody.innerHTML = `
            <img class="img-fluid" src=${ strMealThumb } alt="Receta ${ strMeal }"/>
            <h3 class="my-3">Instrucciones</h3>
            <p>${ strInstructions }</p>
            <h3 class="my-3">Ingredientes y cantidades</h3>
        `;

        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');

        // Mostrar cantidades
        for (let i = 1; i < 20; i++) {
            let ingrediente = receta[`strIngredient${ i }`];
            let cantidad = receta[`strMeasure${ i }`];

            if (ingrediente !== '' && ingrediente !== null) {
                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ ingrediente } - ${ cantidad }`;

                listGroup.appendChild(ingredienteLi);
            }
        }
        modalBody.appendChild(listGroup);

        const modalFooter = document.querySelector('.modal .modal-footer');
        limpiarHTML(modalFooter);

        // Boton de favorito y cerrar
        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) 
                                    ? 'Eliminar favorito'
                                    : 'Guardar favorito';
        // Event handler
        btnFavorito.onclick = function() {
            if (existeStorage(idMeal)){
                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Guardar favorito';
                mostrarToast('Eliminado correctamente');
                return;
            }
            
            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                imagen: strMealThumb
            });
            btnFavorito.textContent = 'Eliminar favorito';
            mostrarToast('Agregado correctamente');
        }

        const btnCerrar = document.createElement('BUTTON');
        btnCerrar.classList.add('btn', 'btn-secondary', 'col');
        btnCerrar.textContent = 'Cerrar';
        // btnCerrar.dataset.bsDismiss = "modal";
        // Event handler
        btnCerrar.onclick = function() {
            modalHTML.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrar);

        // Muestra el modal
        modalHTML.show();
    }

    function agregarFavorito(receta) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]));
    }
    
    function eliminarFavorito(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter((favorito) => favorito.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    function existeStorage(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some((favorito) => favorito.id === id);
    }

    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');

        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;

        toast.show();
    }

    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        
        if (favoritos.length) {
            mostrarRecetas(favoritos);
            return;
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        noFavoritos.textContent = 'No hay favoritos aún';
        favoritosDiv.appendChild(noFavoritos);
    }

    function limpiarHTML(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }
}
