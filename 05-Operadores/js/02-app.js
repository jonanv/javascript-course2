// Operador comparar 2 valores

const numero1 = 20;
const numero2 = '20';
const numero3 = 30;

// == Compara el valor
console.log(numero1 == numero2); // true
console.log(numero1 == numero3); // false

// === Compara el valor y el tipo de dato
console.log(numero1 === numero2); // false
console.log(numero1 === numero3); // false

console.log(numero1 === parseInt(numero2)); // true

// != Compara el valor
console.log(numero1 != numero2); // false
console.log(numero1 != numero3); // true

// !== Compara el valor y el tipo de dato
console.log(numero1 !== numero2); // true
console.log(numero1 !== numero3); // true