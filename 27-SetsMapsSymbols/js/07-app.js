// Generadores en JavaScript

function *crearGenerador() {
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}

const generador = crearGenerador();
console.log(generador);
console.log(generador.next().value);
console.log(generador.next().done);
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador);


// Generador para carrito de compras
let i = 0;
function *generadorCarrito(carrito) {
    while (i < carrito.length) {
        yield carrito[i];
        i++;
    }
}

const carrito = ['producto 1', 'producto 2', 'producto 3'];
const iterator = generadorCarrito(carrito);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());