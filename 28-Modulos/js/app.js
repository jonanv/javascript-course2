// Básico de los módulos en JavaScript

import nuevaFuncion, 
    { mostrarInformacion, nombreCliente as alias, ahorro, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

// Variables
console.log(alias);
console.log(ahorro);

// Funciones
console.log(mostrarInformacion(alias, ahorro));
tieneSaldo(ahorro);

// Clases
const cliente = new Cliente(alias, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion());

// Clases herencia
const empresa = new Empresa('Codigo con Juan', 100, 'Tech');
console.log(empresa);
console.log(empresa.mostrarInformacion());

// Export default
nuevaFuncion();