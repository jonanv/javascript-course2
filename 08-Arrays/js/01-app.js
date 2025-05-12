// Crear arrays

const numbers = [1, 2, 3, 4, 5];
const strings = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
const booleans = [true, false, true, false, true];
const mixed = [1, 'dos', true, null, undefined, { name: 'Juan' }, [1, 2, 3]];
const empty = [];
const nested = [
  [1, 2, 3],
  ['uno', 'dos', 'tres'],
  [true, false, true],
  [null, undefined],
];
const array = new Array(10); // Crea un array de 10 elementos vacíos
const array2 = new Array(1, 2, 3, 4, 5); // Crea un array con los elementos pasados como argumentos

// Acceder a los elementos de un array
console.log(numbers[0]); // 1
console.log(strings[1]); // 'dos'
console.log(booleans[2]); // true

console.log(array);
console.log(array2);