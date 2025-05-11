"use strict";
// Congelar un objeto para no modificarlo

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Congelar un objeto
Object.freeze(producto);

producto.disponible = false; // No se puede modificar
producto.imagen = 'imagen.jpg'; // No se puede agregar propiedades
delete producto.precio; // No se puede eliminar propiedades
producto.nombre = 'Monitor 24 pulgadas'; // No se puede modificar

console.log(producto);
console.log(Object.isFrozen(producto)); // true
