import AdminCitas from "./classes/AdminCitas";
import Notificacion from "./classes/Notificacion";
import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario, btnFormulario } from "./selectores";
import { citaObj, editando } from "./variables";

const adminCitas = new AdminCitas();

// Functions
export function llenarCampoCita(e) {
    citaObj[e.target.name] = e.target.value;
    // console.log(citaObj);
}

export function enviarFormulario(e) {
    e.preventDefault();

    if (Object.values(citaObj).some(value => value.trim() === '')) {
        new Notificacion({
            texto: 'Todos los campos estan vacíos.', 
            tipo: 'error'
        });
        return;
    }

    if (editando.value) {
        adminCitas.editarCita({...citaObj});
        new Notificacion({
            texto: 'Guardado correctamente', 
            tipo: 'success'
        });
        btnFormulario.value = 'Registrar Paciente';
        editando.value = false;
    } else {
        adminCitas.agregarCita({...citaObj});
        new Notificacion({
            texto: 'Paciente registrado', 
            tipo: 'success'
        });
    }

    reiniciarObjectoCita();
}

export function reiniciarObjectoCita() {
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

export function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita) {
    Object.assign(citaObj, cita);
    
    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando.value = true;
    btnFormulario.value = 'Guardar cambios';
}

export function eliminarCita(cita) {
    adminCitas.eliminarCita(cita.id);
}