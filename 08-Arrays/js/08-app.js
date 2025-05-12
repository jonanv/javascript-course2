// Destructuracion de arreglos

const numeros = [1, 2, 3, 4, 5];
const [uno, dos, tres, cuatro, cinco] = numeros;

console.log(uno); // 1
console.log(dos); // 2
console.log(tres); // 3
console.log(cuatro); // 4


const frutas = ['manzana', 'banana', 'naranja', 'uva'];
const [, , , fruta4] = frutas;

console.log(fruta4); // uva