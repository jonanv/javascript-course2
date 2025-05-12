// map para iterar un array y sus diferencias con forEach
// forEach no retorna nada, solo itera
// map retorna un nuevo array con los resultados de la función que se le pasa como argumento

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Auriculares', precio: 200 },
    { nombre: 'Altavoces', precio: 400 },
];

const nuevoCarrito = carrito.map((producto) => {
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoCarrito2 = carrito.forEach((producto) => {
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoCarrito);
console.log(nuevoCarrito2);