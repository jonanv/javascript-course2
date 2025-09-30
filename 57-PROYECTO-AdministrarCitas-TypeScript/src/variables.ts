import { generarId } from "./funciones";

let editando = {
    value: false
};

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

export {
    editando,
    citaObj
}