import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario } from "./selectores.js";
import { llenarCampoCita, enviarFormulario } from "./funciones.js";

// Events
pacienteInput.addEventListener('change', llenarCampoCita);
propietarioInput.addEventListener('change', llenarCampoCita);
emailInput.addEventListener('change', llenarCampoCita);
fechaInput.addEventListener('change', llenarCampoCita);
sintomasInput.addEventListener('change', llenarCampoCita);

formulario.addEventListener('submit', enviarFormulario);