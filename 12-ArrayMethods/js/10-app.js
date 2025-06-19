// Metodo .with
// El método `.with()` crea una copia de un array con un valor modificado en un índice específico.
// Este método no modifica el array original, sino que devuelve un nuevo array con el cambio aplicado

const arr = [1, 2, 3];
const newArr = arr.with(1, 10); // Modifica el índice 1 e introduce el valor 10

console.log(arr); // [1, 2, 3] (array original)
console.log(newArr); // [1, 10, 3] (nueva copia con el valor modificado)