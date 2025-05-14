// Operadores de asignación
// Falsy: 0, -0, '', false, null, undefined, NaN
// Truthy: '0', ' ', [], {}, true

// ||=
// El operador ||= asigna el valor si es falsy
let page = undefined;
// page = page || 'Página cargada';
// console.log(page);

page ||= 'Página cargada';
console.log(page);

// ??=
// El operador ??= asigna el valor si es null o undefined
let score;
// score = score || 'Página cargada';
// console.log(score);

score ??= 0;
console.log(score);

// &&=
// El operador &&= asigna el valor si es truthy
let user = 'Juan';
// user = user && 'Pedro';
// console.log(user);

user &&= 'Pedro';
console.log(user);