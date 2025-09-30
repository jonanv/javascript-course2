import './style.css';
import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario } from "./selectores";
import { llenarCampoCita, enviarFormulario } from "./funciones";

// Events
pacienteInput.addEventListener('change', llenarCampoCita);
propietarioInput.addEventListener('change', llenarCampoCita);
emailInput.addEventListener('change', llenarCampoCita);
fechaInput.addEventListener('change', llenarCampoCita);
sintomasInput.addEventListener('change', llenarCampoCita);

formulario.addEventListener('submit', enviarFormulario);