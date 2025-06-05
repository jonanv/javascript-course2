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

const ui = new UI();
console.log(ui);

document.addEventListener('DOMContentLoaded', () => {

});