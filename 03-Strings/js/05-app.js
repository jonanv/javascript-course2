const producto = "Monitor 20 Pulgadas";

console.log(producto);

// Reemplazar texto
console.log(producto.replace("Pulgadas", '"'));

// Corta una parte de la cadena
console.log(producto.slice(0, 10));

// Corta una parte de la cadena
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

// La diferencia entre slice y substring es que slice permite valores negativos
// y substring no y substring permite invertir los valores y slice no

const nombre = 'Giovanni';

// Corta una parte de la cadena
console.log(nombre.slice(0, 1));

// Devuelve el primer caracter de la cadena
console.log(nombre.charAt(0));