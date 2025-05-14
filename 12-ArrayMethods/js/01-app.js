// some
// El método some() prueba si al menos un elemento en el array cumple con la condición 
// implementada por la función proporcionada. Devuelve un valor booleano (true o false).

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Comprobar si un elemento existe en el array
const resultado = meses.includes('Enero');
console.log(resultado); // true

// Comprobar si un elemento existe en array de objetos
const resultado2 = carrito.some(producto => producto.precio > 800);
console.log(resultado2); // false

const resultado3 = meses.some(mes => mes === 'Enero');
console.log(resultado3); // true