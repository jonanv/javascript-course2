// every
// Verifica si todos los elementos cumplen con la condición, retorna true o false
// si al menos uno no cumple, retorna false

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const resultado1 = meses.every(mes => mes.length > 4);
console.log(resultado1); // false

const resultado2 = carrito.every(producto => producto.precio < 1000);
console.log(resultado2); // true