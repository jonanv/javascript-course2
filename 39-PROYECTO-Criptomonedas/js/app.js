const moneda = document.querySelector('#moneda');
const criptomonedas = document.querySelector('#criptomonedas');

document.addEventListener('DOMContentLoaded', () => {
    moneda.addEventListener('change', seleccionarMoneda);
});

function seleccionarMoneda(e) {
    const moneda = e.target.value;
    obtenerCriptomonedas(moneda);
}

function obtenerCriptomonedas(moneda) {
    const PROTOCOLO = 'https://';
    const DOMINIO = 'min-api.cryptocompare.com';
    const PATH = '/data/top/mktcapfull';
    const endpoint = `?limit=10&tsym=${ moneda }`;
    const URL = `${ PROTOCOLO }${ DOMINIO }${ PATH }${ endpoint }`;

    fetch(URL)
        .then((response) => response.json())
        .then((criptomonedas) => mostrarCriptomonedas(criptomonedas.Data))
        .catch((error) => console.log(error));
}

function mostrarCriptomonedas(monedas) {
    console.log(monedas);
}