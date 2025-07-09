// Coercion
// Es el proceso de convertir un tipo de dato a otro
// En JavaScript, la coerción puede ser implícita o explícita
// La coerción implícita ocurre automáticamente cuando JavaScript convierte un tipo de dato a otro sin que el programador lo indique explícitamente
// La coerción explícita ocurre cuando el programador utiliza funciones o métodos para convertir un tipo de dato a otro

const numero1 = 20;
const numero2 = '40';

console.log(numero1 + numero2); // Lo convierte a string, coercion implicita

console.log(Number(numero2)); // Lo convierte a number, coercion explicita

console.log(numero1.toString()); // Lo convierte a string, coercion explicita

const pedido = [1, 2, 3, 4];
console.log(pedido.toString()); // coercion explicita
console.log(JSON.stringify(pedido)); // coercion explicita