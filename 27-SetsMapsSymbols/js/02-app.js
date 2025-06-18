// Que es un WeakSet y en que se diferencia de un Set
// Un WeakSet es una coleccion de objetos que no previene la recoleccion de basura
// Un WeakSet no es iterable, no tiene metodos como forEach, size, clear.
// Un WeakSet solo puede contener objetos, no primitivos
// Un WeakSet no tiene un orden definido, por lo que no se puede acceder a sus elementos por indice

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    edad: 30
}

weakset.add(cliente);


// Agregar un primitivo, marca error
// const nombre = 'Pedro';

// weakset.add(nombre);

console.log(weakset.has(cliente));

console.log(weakset.delete(cliente));

console.log(weakset);