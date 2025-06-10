// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const listaGastos = document.querySelector('#gastos ul');

// Eventos
eventsListeners();
function eventsListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = presupuesto;
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos.push(gasto);
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad;

        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    mostrarAlerta(mensaje, tipo) {
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('text-center', 'alert');

        tipo === 'error' 
            ? divAlerta.classList.add('alert-danger')
            : divAlerta.classList.add('alert-success');
        
        divAlerta.textContent = mensaje;
        const content = document.querySelector('.primario');
        content.insertBefore(divAlerta, content.children[1]);

        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }
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
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validar
    if (nombre.trim() === '' || cantidad === '') {
        ui.mostrarAlerta('Ambos campos son abligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.mostrarAlerta('Cantidad no válida', 'error');
        return;
    }

    const gasto = {
        id: Date.now(),
        nombre,
        cantidad
    };

    presupuesto.nuevoGasto(gasto);

    ui.mostrarAlerta('Gasto agregado correctamente');
    formulario.reset();
}