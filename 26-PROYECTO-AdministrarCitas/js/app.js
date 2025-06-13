// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');

// Objecto de la cita
// Object literal
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
}

// Events
pacienteInput.addEventListener('change', llenarCampoCita);
propietarioInput.addEventListener('change', llenarCampoCita);
emailInput.addEventListener('change', llenarCampoCita);
fechaInput.addEventListener('change', llenarCampoCita);
sintomasInput.addEventListener('change', llenarCampoCita);

formulario.addEventListener('submit', enviarFormulario);

// Class
class Notificacion {
    constructor({texto, tipo}) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrarNofiticacion();
    }

    mostrarNofiticacion() {
        // Crear notificación
        const alerta = document.createElement('div');
        alerta.classList.add('alert', 'text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'uppercase', 'font-bold', 'text-sm');

        // Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();

        // Si es de tipo error, agrega la clase
        this.tipo === 'error' 
            ? alerta.classList.add('bg-red-500') 
            : alerta.classList.add('bg-green-500');

        // Insertar texto
        alerta.textContent = this.texto;
        // Insertar en el DOM
        formulario.parentElement.insertBefore(alerta, formulario);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

class AdminCitas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];

        console.log(this.citas);
    }
}

// Functions
function llenarCampoCita(e) {
    citaObj[e.target.name] = e.target.value;
    // console.log(citaObj);
}

const adminCitas = new AdminCitas();

function enviarFormulario(e) {
    e.preventDefault();

    if (Object.values(citaObj).some(value => value.trim() === '')) {
        new Notificacion({
            texto: 'Todos los campos estan vacíos.', 
            tipo: 'error'
        });
        return;
    }

    adminCitas.agregarCita(citaObj);
}