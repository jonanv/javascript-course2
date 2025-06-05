// Object constructors
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

function UI() {

}

// LLenar las opciones de los años
UI.prototype.llenarOpciones = function() {
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