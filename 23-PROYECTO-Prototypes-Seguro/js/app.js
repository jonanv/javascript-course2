// Object constructors
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

function UI() {

}

function UI() { }

// LLenar las opciones de los años
UI.prototype.llenarOpciones = () => {
    const year = document.querySelector('#year');
    let max = new Date().getFullYear();
    let min = max - 20;

    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = min;
        option.textContent = i;
        year.appendChild(option);
    }
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

// Instanciar UI
const ui = new UI();
// console.log(ui);

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los cambios
});

eventsListener();
function eventsListener() {
    const formulario = document.querySelector('#cotizar-seguro');

    formulario.addEventListener('submit', cotizarSeguro);
}

// Funciones
function cotizarSeguro(e) {
    e.preventDefault();

    // Leer marca seleccionada
    const marca = document.querySelector('#marca').value;
    
    // Leer año seleccionado
    const anio = document.querySelector('#year').value;
    
    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || anio === '' || tipo === '') {
        console.log('No paso la validación');
    } else {
        console.log('Paso la validación');
    }
}