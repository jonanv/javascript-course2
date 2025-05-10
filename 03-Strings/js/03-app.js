const producto = 'Monitos 20 pulgadas ';
const precio = '$30 USD';

console.log(producto);

// Concatenar
console.log(producto.concat(precio));
console.log(producto.concat('En oferta'));

// Concatenar con el operador +
console.log(producto + precio);

// Concatenar con comillas dobles
console.log("El producto es: " + producto + " y su precio es: " + precio);

// Concatenar con comas
console.log('El producto es:', producto, 'y su precio es:', precio);

// Concatenar con template strings
console.log(`${producto}${precio}`);