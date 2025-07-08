// Menos cantidad de codigo en tus funciones
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// Hight order functions
const mayor400 = (p) => p.precio > 400;
const resultado = carrito.filter(mayor400);
console.log(resultado);

// Hight order functions
const obtenerNombres = (p) => p.nombre;
const resultado2 = carrito.map(obtenerNombres);
console.log(resultado2);