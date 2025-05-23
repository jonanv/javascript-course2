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
    mostrarAutos(autos);
    // Llenar opcion de años
    llenarSelect();
});

// Eventos para los selects
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAuto();
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto();
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
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

function mostrarAutos(autos) {
    // Limpiar resultado
    limpiarHTML();

    autos.forEach((auto) => {
        const autoHTML = document.createElement('p');

        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        autoHTML.textContent = `
            ${ marca } ${ modelo } ${ year } - Puertas: ${ puertas } - Transmision: ${ transmision } - Precio: $${ precio } - Color: ${ color }
        `;

        resultado.appendChild(autoHTML);
    });
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Funciones de orden superior
// Son funciones que reciben otras funciones como argumento o devuelven una funcion como resultado
function filtrarAuto() {
    // console.log(datosBusqueda);

    const autosFiltrados = autos
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);

    // console.log(autosFiltrados);

    if (autosFiltrados.length) {
        // Mostrar autos filtrados
        mostrarAutos(autosFiltrados);
    } else {
        sinResultados();
    }
}

function sinResultados() {
    limpiarHTML();
    const noResultados = document.createElement('div');
    noResultados.classList.add('alerta', 'error');
    noResultados.textContent = `No se encontraron resultados`;
    resultado.appendChild(noResultados);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}