const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacion = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if (terminoBusqueda.trim() === '') {
        mostrarAlerta('Agrega un termino de búsqueda');
        return;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje) {
    // Eliminar alertas duplicadas
    const alertaPrevia = document.querySelector('.alerta');
    alertaPrevia?.remove();

    const alerta = document.createElement('P');
    alerta.classList.add('alerta', 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    alerta.innerHTML = `
        <strong class="block font-bold">Error!</strong>
        <span class="block sm:inline">${ mensaje }</span>
    `;

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

async function buscarImagenes() {
    const terminoBusqueda = document.querySelector('#termino').value;

    const ENDPOINT = 'https://pixabay.com/api/';
    const APIKEY = '810851-e6ebb600d0c88c05a42d011a2';
    const URL = `${ ENDPOINT }?key=${ APIKEY }&q=${ terminoBusqueda }&per_page=${ registrosPorPagina }&page=${ paginaActual }`;

    // Con Promises
    // fetch(URL)
    //     .then((response) => response.json())
    //     .then(imagenes => {
    //         totalPaginas = calcularPaginas(imagenes.totalHits);
    //         mostrarImagenes(imagenes.hits);
    //     })
    //     .catch((error) => console.error(error));

    // Con Async await
    try {
        const response = await fetch(URL);
        const result = await response.json();
        totalPaginas = calcularPaginas(result.totalHits);
        mostrarImagenes(result.hits);
    } catch (error) {
        console.error(error);
    }
}

// Generador de va a registrar la cantidad de elementos de acuerdo a las paginas
function *crearPaginador(total) {
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}

function calcularPaginas(total) {
    return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostrarImagenes(imagenes = []) {
    limpiarHTML(resultado);

    imagenes.forEach((imagen) => {
        const { previewURL, likes, views, largeImageURL } = imagen;

        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white rounded">
                    <img class="w-full" src=${ previewURL } />

                    <div class="p-4">
                        <p class="font-bold">${ likes } <span class="font-light">Me gusta</span></p>
                        <p class="font-bold">${ views } <span class="font-light">Vistas</span></p>

                        <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${ largeImageURL }" target="_blank" rel="noopener noreferrer">
                            Ver imagen
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    // Limpiar el paginador previo
    limpiarHTML(paginacion);
    imprimirPaginador();
}

function imprimirPaginador() {
    iterador = crearPaginador(totalPaginas);
    
    while (true) {
        const { value, done } = iterador.next();
        if (done) return;

        // Caso contrario, enera un boton por cada elemento en el generador
        const boton = document.createElement('A');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded');

        boton.onclick = () => {
            paginaActual = value;
            buscarImagenes();
        }

        paginacion.appendChild(boton);
    }
}

function limpiarHTML(selector) {
    while (selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}