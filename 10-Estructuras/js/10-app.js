// Nullish coalescing operator
// El operador nullish coalescing solo asigna el valor si es null o undefined

// Falsy: 0, -0, '', false, null, undefined, NaN
// Truthy: '0', ' ', [], {}, true
let puntaje1 = 0;

puntaje1 = puntaje1 || 100;
console.log(puntaje1);

// Nullish: null, undefined
let puntaje2 = 0;

puntaje2 = puntaje2 ?? 100;
console.log(puntaje2);

