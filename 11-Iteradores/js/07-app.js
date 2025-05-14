// for of

const pendientes = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

for (const pendiente of pendientes) {
    console.log(pendiente);
}

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Television 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
];

for (const producto of carrito) {
    console.log(producto.nombre);
}