// Eliminar elementos de un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

// pop
// Elimina el último elemento del array
meses.pop();
console.table(meses);

// shift
// Elimina el primer elemento del array
meses.shift();
console.table(meses);

// splice
// Agrega un nuevo elemento en una posición específica
meses.splice(1, 0, 'Febrero');
console.table(meses);

// splice
// Elimina un elemento en una posición específica
meses.splice(1, 1);
console.table(meses);

