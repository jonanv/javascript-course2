// Básico de los módulos en JavaScript

import { mostrarInformacion, nombreCliente, ahorro, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

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

// Clases herencia
const empresa = new Empresa('Codigo con Juan', 100, 'Tech');
console.log(empresa);
console.log(empresa.mostrarInformacion());