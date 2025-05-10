// Convertir String a Número

const numero1 = "10";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;
const numero5 = 40.2;

console.log(typeof numero1);
console.log(parseInt(numero1));
console.log(Number.parseInt(numero1));

console.log(typeof numero2);
console.log(parseFloat(numero2));
console.log(parseInt(numero2));
console.log(Number.parseFloat(numero2));

console.log(typeof numero3);
console.log(parseInt(numero3)); // NaN Not a Number

// Revisar si es un número entero
console.log(Number.isInteger(numero4)); // true
console.log(Number.isInteger(numero5)); // false