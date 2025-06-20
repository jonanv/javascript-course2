import Notificacion from "./classes/Notificacion.js";
// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');
const btnFormulario = document.querySelector('#formulario-cita input[type="submit"]');
const contenedorCitas = document.querySelector('#citas');

let editando = false;

// Objecto de la cita
// Object literal
const citaObj = {
    id: generarId(),
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

class AdminCitas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];
        this.mostrarCitas();
    }

    editarCita(citaActualizada) {
        this.citas = this.citas.map((cita) => cita.id === citaActualizada.id ? citaActualizada : cita);
        this.mostrarCitas();
    }

    eliminarCita(id) {
        this.citas = this.citas.filter((cita) => cita.id !== id);
        this.mostrarCitas();
    }

    mostrarCitas() {
        // Limpiar el HTML
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        // Si no hay citas
        if(this.citas.length === 0) {
            contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
            return;
        }

        // Generando las citas
        this.citas.forEach((cita) => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl', 'p-3');

            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            // Botones de eliminar y editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
            // Event handler
            btnEditar.onclick = () => cargarEdicion(cita);

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            // Event handler
            btnEliminar.onclick = () => eliminarCita(cita);

            const contenedorBotones = document.createElement('div');
            contenedorBotones.classList.add('flex', 'justify-between', 'mt-10');

            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
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
    }

    if (editando) {
        adminCitas.editarCita({...citaObj});
        new Notificacion({
            texto: 'Guardado correctamente', 
            tipo: 'success'
        });
        btnFormulario.value = 'Registrar Paciente';
        editando = false;
    } else {
        adminCitas.agregarCita({...citaObj});
        new Notificacion({
            texto: 'Paciente registrado', 
            tipo: 'success'
        });
    }

    reiniciarObjectoCita();
}

function reiniciarObjectoCita() {
    // Reiniciar objecto
    // citaObj.paciente = '';
    // citaObj.propietario = '';
    // citaObj.email = '';
    // citaObj.fecha = '';
    // citaObj.sintomas = '';

    // Reiniciar objeto con assign
    // Object.assign(citaObj, {
    //     paciente: '',
    //     propietario: '',
    //     email: '',
    //     fecha: '',
    //     sintomas: '',
    // });

    for (const element in citaObj) {
        citaObj[element] = '';
    }
    citaObj.id = generarId();

    formulario.reset();
}

function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}

function cargarEdicion(cita) {
    Object.assign(citaObj, cita);
    
    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando = true;
    btnFormulario.value = 'Guardar cambios';
}

function eliminarCita(cita) {
    adminCitas.eliminarCita(cita.id);
}