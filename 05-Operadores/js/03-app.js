// Comparar Null y Undefined

let numero1;
console.log(numero1); // undefined
console.log(typeof numero1); // undefined

let numero2 = null;
console.log(numero2); // null
console.log(typeof numero2); // object

// Diferencia entre null y undefined
// undefined: variable declarada pero no inicializada
// null: variable inicializada pero sin valor
// null es un valor asignado intencionalmente

// Comparar null y undefined
console.log(numero1 == numero2); // true
console.log(numero1 === numero2); // false