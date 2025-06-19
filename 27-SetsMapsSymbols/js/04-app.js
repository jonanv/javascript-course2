// Que son los WeakMaps
// WeakMap es una coleccion de pares clave-valor donde las claves son objetos y los valores pueden ser cualquier tipo de dato.
// Las claves de un WeakMap son objetos y no pueden ser primitivos.
// A diferencia de un Map, un WeakMap no previene que los objetos sean recolectados por el garbage collector.
// Esto significa que si no hay referencias a un objeto clave en un WeakMap, el objeto y su valor asociado pueden ser eliminados de la memoria.
// WeakMap no tiene métodos para iterar sobre sus elementos, ya que no se garantiza el orden de los elementos y las claves pueden ser eliminadas en cualquier momento.

const producto = {
    idProducto: 1,
    nombre: 'Computador'
}

const weakmap = new WeakMap();

weakmap.set(producto, 'producto');

console.log(weakmap.has(producto));

// Los valores del objeto quedan ocultos
console.log(weakmap.get(producto));

weakmap.delete(producto);

console.log(weakmap);