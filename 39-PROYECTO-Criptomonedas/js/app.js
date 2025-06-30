const monedaSelect = document.querySelector('#moneda');
const criptomonedasSelect = document.querySelector('#criptomonedas');
const formulario = document.querySelector('#formulario');

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

function consultarCriptomonedas() {
    const PROTOCOLO = 'https://';
    const DOMINIO = 'min-api.cryptocompare.com';
    const PATH = '/data/top/mktcapfull';
    const endpoint = `?limit=10&tsym=USD`;
    const URL = `${ PROTOCOLO }${ DOMINIO }${ PATH }${ endpoint }`;

    fetch(URL)
        .then((response) => response.json())
        .then((resultado) => obtenerCriptomonedas(resultado.Data))
        .then((criptomonedas) => mostrarCriptomonedas(criptomonedas))
        .catch((error) => console.log(error));
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
    console.log(objBusqueda);
}

function enviarFormulario(e) {
    e.preventDefault();

    // Validar
    const { moneda, criptomoneda } = objBusqueda;

    if (moneda.trim() === '' && criptomoneda.trim() === '') {
        console.log('Debes seleccionar los campos');
    }
}