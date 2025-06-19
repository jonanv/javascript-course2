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


// Realiza operaciones de conjuntos con los métodos de Set en JavaScript
// Las estructuras de datos Set han recibido nuevos métodos que permiten realizar operaciones de conjuntos en JavaScript. Estos métodos son intersection(), union(), difference() y symmetricDifference(), isSubsetOf(), isSupersetOf() y isDisjointWith().
const web = new Set(['JavaScript', 'HTML', 'CSS']);
const backend = new Set(['JavaScript', 'Java', 'C#']);
const compiled = new Set(['Java', 'TypeScript', 'C#']);

// Union
// La unión de dos conjuntos es aquel conjunto que tiene todos los elementos de ambos conjuntos. En JavaScript, podemos realizar uniones de conjuntos utilizando el método union().
console.log(web.union(backend));

// Intersección
// La intersección de dos conjuntos es aquel conjunto que tiene elementos que están presentes en ambos conjuntos. En JavaScript, podemos realizar intersecciones de conjuntos utilizando el método intersection().
console.log(web.intersection(backend));
console.log(web.intersection(compiled));

// Diferencia
// La diferencia de dos conjuntos es aquel conjunto que tiene todos los elementos de uno de los conjuntos, pero no tiene los elementos de otro conjunto. En JavaScript, podemos realizar diferencias de conjuntos utilizando el método difference().
console.log(web.difference(compiled));
console.log(web.difference(backend));
console.log(backend.difference(web));

// Symmetric Difference
// La diferencia simétrica de dos conjuntos es aquel conjunto que tiene todos los elementos de uno de los conjuntos, pero no tiene los elementos de otro conjunto.
// Además, tiene todos los elementos de otro conjunto, pero no tiene los elementos de uno de los conjuntos. En JavaScript, podemos realizar diferencias simétricas de conjuntos utilizando el método symmetricDifference().
console.log(backend.symmetricDifference(web));
console.log(web.symmetricDifference(backend));

// Subconjunto
// Un subconjunto de un conjunto es aquel conjunto que contiene todos los elementos de otro conjunto. Para saber si un conjunto es un subconjunto de otro, podemos utilizar el método isSubsetOf().
const begginer = new Set(['HTML', 'CSS']);
console.log(begginer.isSubsetOf(web));
console.log(web.isSubsetOf(begginer));

// Superconjunto
// Un superconjunto de un conjunto es aquel conjunto que contiene todos los elementos del otro conjunto. Para saber si un conjunto es un superconjunto de otro, podemos utilizar el método isSupersetOf().
console.log(web.isSupersetOf(begginer));

// Disjuntos
// Y, finalmente, para revisar si dos conjuntos no comparten ningún elemento en común, podemos utilizar el método isDisjointFrom().
console.log(backend.isDisjointFrom(web));
console.log(compiled.isDisjointFrom(web));