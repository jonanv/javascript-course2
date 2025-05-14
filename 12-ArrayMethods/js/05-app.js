// find

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const resultado1 = meses.find(mes => mes === 'Enero');
console.log(resultado1); // Enero

const resultado2 = carrito.find(producto => producto.precio === 700);
console.log(resultado2); // { nombre: 'Celular', precio: 700 }