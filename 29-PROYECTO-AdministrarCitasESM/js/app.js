import Notificacion from "./classes/Notificacion.js";
import AdminCitas from "./classes/AdminCitas.js";

import {
    pacienteInput,
    propietarioInput,
    emailInput,
    fechaInput,
    sintomasInput,
    formulario,
    btnFormulario
} from "./selectores.js";

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