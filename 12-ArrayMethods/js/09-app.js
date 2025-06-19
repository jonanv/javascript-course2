// Metodo .at
// El método `.at()` permite acceder a un elemento de un array utilizando un índice positivo o negativo.
// Un índice positivo cuenta desde el inicio del array, mientras que un índice negativo cuenta desde el final del array.
// Este método es útil para acceder a elementos sin necesidad de calcular la longitud del array.

const fruits = ['apple', 'banana', 'orange', 'grape'];

// Using positive indexing
console.log(fruits.at(0));  // Output: 'apple'
console.log(fruits.at(2));  // Output: 'orange'

// Using negative indexing
console.log(fruits.at(-1)); // Output: 'grape'
console.log(fruits.at(-3)); // Output: 'banana'