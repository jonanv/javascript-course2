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


// TypeScript
// Primitives types
// let precio: number;
// let nombre: string;
// let disponible: boolean;

// precio = 200;
// nombre = 'Monitor 20 Pulgadas';
// disponible = true;


// interface Producto {
//     precio: number;
//     nombre: string;
//     disponible: boolean;
// }

// const producto: Producto = {
//     precio: 300,
//     nombre: 'Monitor 24 Pulgadas',
//     disponible: true
// }

// console.log(producto.nombre);