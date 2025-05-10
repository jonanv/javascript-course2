const producto = '         Monitos 20 pulgadas         ';

console.log(producto);

// Elimina los espacios al inicio
console.log(producto.trimStart());

// Elimina los espacios al final
console.log(producto.trimEnd());

// Elimina los espacios al inicio y al final con chaining
console.log(producto.trimStart().trimEnd());

// Elimina los espacios al inicio y al final
console.log(producto.trim());