// For loop

for (let i = 0; i < 10; i++) {
    console.log(`Número: ${i}`);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`Número par: ${i}`);
    } else {
        console.log(`Número impar: ${i}`);
    }
}

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisor 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre}`);
}