// Sets y sus caracteristicas
// Un set es una coleccion de valores unicos sin duplicados
// Un set cuando maneja grandes cantidades de datos es mas eficiente que un array o un objeto
// Son iterables

const carrito = new Set();

console.log(carrito);

// Agregar valor a Set
carrito.add('camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

console.log(carrito);

// Tamaño del Set
console.log(carrito.size);

// Comprobar si tiene un valor
console.log(carrito.has('camisa'));
console.log(carrito.has('Disco'));
console.log(carrito.has('Guitarra'));

// Eliminar un valor
console.log(carrito.delete('Disco #3'));

// Eliminar un valor que no existe devuelve false
console.log(carrito.delete('Guitarra'));

// Recorrer los elementos
// LLave o valor en un set es lo mismo
// pertenece es el set original
carrito.forEach((elemento, index, pertenece) => {
    console.log(elemento);
    console.log(index);
    console.log(pertenece);
});

// Eliminar todos los elementos
carrito.clear();
console.log(carrito);

// Ejemplo de un set
// Del siguiente arreglo eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];
const setNumeros = new Set(numeros);
console.log(setNumeros); // [10, 20, 30, 40, 50]