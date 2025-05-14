// findIndex
// El método findIndex() devuelve el índice del primer elemento del array que cumple con la
// función de prueba proporcionada. En caso de que no se encuentre ningún elemento, devuelve -1.

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
const resultado = meses.findIndex(mes => mes === 'Enero');
console.log(resultado); // 0

// Comprobar si un elemento existe en array de objetos
const resultado2 = carrito.findIndex(producto => producto.precio === 100);
console.log(resultado2); // 1