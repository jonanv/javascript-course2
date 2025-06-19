// Básico de los módulos en JavaScript

import { mostrarInformacion, nombreCliente, ahorro, tieneSaldo, Cliente } from "./cliente.js";

// Variables
console.log(nombreCliente);
console.log(ahorro);

// Funciones
console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);

// Clases
const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion());