// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const listaGastos = document.querySelector('#gastos ul');

// Eventos
eventsListeners();
function eventsListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}

// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = presupuesto;
        this.gastos = [];
    }
}

class UI {

}

// Instanciado UI
const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    // console.log(presupuestoUsuario);

    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    const total = document.querySelector('#total');
    total.textContent = presupuesto.presupuesto;
    const restante = document.querySelector('#restante');
    restante.textContent = presupuesto.restante;

    console.log(presupuesto);
}