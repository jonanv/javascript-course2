const PROTOCOLO = 'https://';
const DOMINIO = 'min-api.cryptocompare.com';

const monedaSelect = document.querySelector('#moneda');
const criptomonedasSelect = document.querySelector('#criptomonedas');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

// Crear un promise
const obtenerCriptomonedas = (criptomonedas) => new Promise((resolve, reject) => {
    resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', enviarFormulario);

    monedaSelect.addEventListener('change', leerValor);
    criptomonedasSelect.addEventListener('change', leerValor);
});

function seleccionarMoneda(e) {
    const moneda = e.target.value;
    obtenerCriptomonedas(moneda);
}

async function consultarCriptomonedas() {
    const PATH = '/data/top/mktcapfull';
    const endpoint = `?limit=10&tsym=USD`;
    const URL = `${ PROTOCOLO }${ DOMINIO }${ PATH }${ endpoint }`;

    // Con promises
    // fetch(URL)
    //     .then((response) => response.json())
    //     .then((resultado) => obtenerCriptomonedas(resultado.Data))
    //     .then((criptomonedas) => mostrarCriptomonedas(criptomonedas))
    //     .catch((error) => console.error(error));

    // Con async await
    try {
        const response = await fetch(URL);
        const result = await response.json();
        const criptomonedas = await obtenerCriptomonedas(result.Data);
        mostrarCriptomonedas(criptomonedas);
    } catch (error) {
        console.error(error);
    }

}

function mostrarCriptomonedas(criptomonedas) {
    console.log(criptomonedas);
    criptomonedas.forEach((criptomoneda) => {
        const { Name, FullName } = criptomoneda.CoinInfo;

        const opcion = document.createElement('OPTION');
        opcion.value = Name;
        opcion.textContent = FullName;
        criptomonedasSelect.appendChild(opcion);
    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
}

function enviarFormulario(e) {
    e.preventDefault();

    // Validar
    const { moneda, criptomoneda } = objBusqueda;

    if (moneda === '' || criptomoneda === '') {
        mostraAlerta('Debes seleccionar los campos');
        return;
    }

    // Consultar la API de los resultados
    consultarAPI();
}

function mostraAlerta(mensaje) {
    // Eliminar alertas duplicadas
    const alertaPrevia = document.querySelector('.alert');
    alertaPrevia?.remove();

    const mensajeDiv = document.createElement('DIV');
    mensajeDiv.classList.add('error', 'alert');
    mensajeDiv.textContent = mensaje;

    formulario.appendChild(mensajeDiv);

    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

async function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;

    // const PATH = '/data/price';
    // const endpoint = `?fsym=${ criptomoneda }&tsyms=${ moneda }`;

    const PATH = '/data/pricemultifull';
    const endpoint = `?fsyms=${ criptomoneda }&tsyms=${ moneda }`;
    const URL = `${ PROTOCOLO }${ DOMINIO }${ PATH }${ endpoint }`;

    mostrarSpinner();

    // Con promises
    // fetch(URL)
    //     .then((response) => response.json())
    //     .then((cotizacion) => {
    //         mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    //     })
    //     .catch((error) => console.error(error));

    // Con async await
    try {
        const response = await fetch(URL);
        const result = await response.json();
        mostrarCotizacionHTML(result.DISPLAY[criptomoneda][moneda]);
    } catch (error) {
        console.error(error);
    }
}

function mostrarCotizacionHTML(cotizacion) {
    limpiarHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${ PRICE }</span>`;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `<p>Precio más alto del día <span>${ HIGHDAY }</span></p>`;

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `<p>Precio más bajo del día <span>${ LOWDAY }</span></p>`;

    const ultimasHoras = document.createElement('P');
    ultimasHoras.innerHTML = `<p>Variación de las últimas horas <span>${ CHANGEPCT24HOUR }%</span></p>`;

    const ultimaActualizacion = document.createElement('P');
    ultimaActualizacion.innerHTML = `<p>Última actualización <span>${ LASTUPDATE }</span></p>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML();

    const contenedorSpinner = document.createElement('DIV');
    contenedorSpinner.classList.add('spinner');
    contenedorSpinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;
    resultado.appendChild(contenedorSpinner);
}