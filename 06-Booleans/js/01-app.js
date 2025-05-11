// Crear y comparar booleanos

const boolean1 = true;
const boolean2 = false;
const boolean3 = true;

console.log(boolean1); // true
console.log(boolean2); // false
console.log(boolean3); // true

console.log(typeof boolean1); // boolean

const boolean4 = new Boolean(true);
console.log(boolean4); // [Boolean: true]

// Comparar booleanos
const isEqual = boolean1 === boolean2;
console.log(isEqual); // false

const isNotEqual = boolean1 !== boolean2;
console.log(isNotEqual); // true

const isTrue = boolean1 === boolean3;
console.log(isTrue); // true