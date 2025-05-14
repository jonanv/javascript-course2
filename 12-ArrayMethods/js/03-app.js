// reduce
// El método reduce() ejecuta una función reductora sobre cada elemento de un array,
// devolviendo como resultado un único valor.
// El primer argumento de la función reductora es el acumulador, el segundo argumento es el valor actual.
// El método reduce() recibe dos argumentos:
// 1. La función reductora
// 2. El valor inicial del acumulador (opcional)
// El método reduce() no modifica el array original.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// con un forEach
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

// con un reduce
const totalReduce = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(totalReduce);

// con un reduce y un valor inicial
const totalReduce2 = carrito.reduce((acumulador, producto) => {
    console.log(acumulador);
    return acumulador + producto.precio;
}, 0);