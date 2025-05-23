// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

let max = new Date().getFullYear();
let min = max - 10;

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar autos al cargar
    mostrarAutos();
    // Llenar opcion de años
    llenarSelect();
});

// Funciones
function mostrarAutos() {
    autos.forEach((auto) => {
        const autoHTML = document.createElement('p');

        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        autoHTML.textContent = `
            ${ marca } ${ modelo } ${ year } - Puertas: ${ puertas } - Transmision: ${ transmision } - Precio: $${ precio } - Color: ${ color }
        `;

        resultado.appendChild(autoHTML);
    });
}

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}