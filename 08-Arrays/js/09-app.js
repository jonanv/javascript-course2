// forEach para iterar arrays

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Auriculares', precio: 200 },
    { nombre: 'Altavoces', precio: 400 },
];

carrito.forEach((producto, index) => {
    console.log(`La fruta en la posición ${index} es ${producto.nombre} y su precio es ${producto.precio}`);
});