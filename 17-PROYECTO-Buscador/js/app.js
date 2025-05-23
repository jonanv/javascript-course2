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

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar autos al cargar
    mostrarAutos();
    // Llenar opcion de años
    llenarSelect();
});

// Eventos para los selects
marca.addEventListener('change', filtrarAutos);

// Funciones
function mostrarAutos() {
    filtarAutos(autos);
}

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