// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

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
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante(gasto.cantidad);
    }

    calcularRestante() {
        this.gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - this.gastado;
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

    agregarGastoListado(gastos) {
        ui.limpiarHTML();

        gastos.forEach(({ id, nombre, cantidad }) => {
            // Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id', id);
            nuevoGasto.dataset.id = id; // Hace lo mismo que la línea anterior

            // Agregar el HTML al gasto
            nuevoGasto.innerHTML = `
                ${ nombre }
                <span class="badge badge-primary badge-pill">$${ cantidad }</span>
            `;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while(gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteHTML = document.querySelector('.restante');
        
        if ((presupuesto / 4) > restante) {
            restanteHTML.classList.remove('alert-success', 'alert-warning');
            restanteHTML.classList.add('alert-danger');
        } else if ((presupuesto / 2) > restante) {
            restanteHTML.classList.remove('alert-success');
            restanteHTML.classList.add('alert-warning');
        } else {
            restanteHTML.classList.add('alert-success');
        }

        if (restante <= 0) {
            ui.mostrarAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;

        }
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

    const { gastos, restante } = presupuesto;
    ui.agregarGastoListado(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

    ui.mostrarAlerta('Gasto agregado correctamente');
    formulario.reset();
}