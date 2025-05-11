"use strict";
// Sellar un objeto

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Sellar un objeto significa que no se puede agregar o eliminar propiedades del objeto, pero se pueden modificar las propiedades existentes.
Object.seal(producto); // Permite modificar propiedades, pero no agregar o eliminar

producto.disponible = false; // Se puede modificar
producto.imagen = 'imagen.jpg'; // No se puede agregar propiedades
delete producto.precio; // No se puede eliminar propiedades
producto.nombre = 'Monitor 24 pulgadas'; // Se puede modificar

console.log(producto);
console.log(Object.isSealed(producto)); // true
console.log(Object.isExtensible(producto)); // false
