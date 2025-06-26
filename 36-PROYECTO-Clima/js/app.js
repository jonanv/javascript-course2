const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad.trim() === '' || pais.trim() === '') {
        mostrarError('Los campos son obligatorios');
        return;
    }

    // Consultamos la API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    // Eliminar alerta duplicadas
    alertaPrevia = document.querySelector('.alert');
    alertaPrevia?.remove();

    const alerta = document.createElement('div');
    alerta.classList.add('alert', 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
    alerta.innerHTML = `
        <strong class='font-bold'>Error!</strong>
        <span class='block'>${ mensaje }</span>
    `;

    container.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function consultarAPI(ciudad, pais) {
    const appId = '8b7cc6b25c0159f0f8b49d2d2498d447';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ ciudad },${ pais }&appid=${ appId }`;

    fetch(url)
        .then((response) => response.json())
        .then((datos) => {
            // Limpiar HTML
            limpiarHTML();
            
            if (datos.cod == 404) {
                mostrarError('Ciudad no encontrada');
                return;
            }
            mostraClima(datos);
        })
        .catch((error) => console.log(error));
}

function mostraClima(datos) {
    const { main: { temp, temp_max, temp_min } } = datos;

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const actual = document.createElement('p');
    actual.innerHTML = `${ centigrados } &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Máxima: ${ max } &#8451;`;
    tempMaxima.classList.add('text-xl');

    const tempMimina = document.createElement('p');
    tempMimina.innerHTML = `Mínima: ${ min } &#8451;`;
    tempMimina.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMimina);

    resultado.appendChild(resultadoDiv);
}

const kelvinACentigrados = (grados) => parseInt(grados - 273.15);

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}