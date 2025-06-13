// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

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
pacienteInput.addEventListener('change', (e) => {
    citaObj.paciente = e.target.value;
    console.log(citaObj);
});