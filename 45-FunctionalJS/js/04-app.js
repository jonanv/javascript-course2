// Map es muy utilizado en funcional JavaScript
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const resultado = carrito.map((producto) => producto.nombre);
console.log(resultado);

// Hight order functions
const obtenerNombres = (producto) => {
    return producto.nombre;
}
const resultado2 = carrito.map(obtenerNombres);
console.log(resultado2);