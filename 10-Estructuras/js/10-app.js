// Nullish coalescing operator
// El operador nullish coalescing solo asigna el valor si es null o undefined

// Falsy: 0, -0, '', false, null, undefined, NaN
let puntaje1 = "";

puntaje1 = puntaje1 || 100; // Imprime 100 si el valor es falsy
console.log(puntaje1);

// Truthy: '0', ' ', [], {}, true
let puntaje3 = "0";

puntaje3 = puntaje3 && 100; // Imprime 100 si el valor es truthy
console.log(puntaje3);

// Nullish: null, undefined
let puntaje2 = 0;

puntaje2 = puntaje2 ?? 100; // Imprime 0 si el valor es nullish
console.log(puntaje2);

