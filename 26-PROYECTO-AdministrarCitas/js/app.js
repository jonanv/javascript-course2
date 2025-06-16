// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');

const contenedorCitas = document.querySelector('#citas');

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
        this.mostrarCitas();
    }

    mostrarCitas() {
        // Limpiar el HTML
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        // Generando las citas
        this.citas.forEach((cita) => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');

            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            // Agregar div al contenedor
            contenedorCitas.appendChild(divCita);
        });
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
    } else {
        new Notificacion({
            texto: 'Se registro correctamente la cita', 
            tipo: 'success'
        });
    }

    adminCitas.agregarCita(citaObj);
    formulario.reset();
}