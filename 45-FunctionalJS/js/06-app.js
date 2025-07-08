// Pure functions - funciones puras
// Retornan un datos pero no modifican los valores de las variables
// No tienen efectos secundarios
// No dependen de valores externos a la función
// No modifican el estado de la aplicación
// No dependen de variables globales

const numero1 = 20;
const duplicar = (numero) => numero * 2;

const resultado = duplicar(numero1);

console.log(resultado);
console.log(numero1);