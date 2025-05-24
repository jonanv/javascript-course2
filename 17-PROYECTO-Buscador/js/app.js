// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

let max = new Date().getFullYear();
let min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar autos al cargar
    mostrarAutos();
    // Llenar opcion de años
    llenarSelect();
});

// Eventos para los selects
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value;
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
});


// Funciones
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function filtrarAutos(e) {
    const marcaSeleccionada = e.target.value;
    const autosFiltrados = autos.filter(auto => auto.marca === marcaSeleccionada);
    // Limpiar resultado
    limpiarHTML();
    // Mostrar autos filtrados
    filtarAutos(autosFiltrados);
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function filtarAutos(autos) {
    autos.forEach((auto) => {
        const autoHTML = document.createElement('p');

        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        autoHTML.textContent = `
            ${ marca } ${ modelo } ${ year } - Puertas: ${ puertas } - Transmision: ${ transmision } - Precio: $${ precio } - Color: ${ color }
        `;

        resultado.appendChild(autoHTML);
    });
}