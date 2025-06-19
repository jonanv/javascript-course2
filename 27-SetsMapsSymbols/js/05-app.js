// Symbols y sus caracteristicas
// Los Symbols son un tipo de dato primitivo introducido en ECMAScript 2015 (ES6) que representan un identificador único e inmutable.
// Los Symbols son útiles para crear propiedades de objetos que no colisionen con otras propiedades, ya que cada Symbol es único, incluso si tienen el mismo descripción.
// Los Symbols son inmutables, lo que significa que una vez creados, no pueden ser modificados.
// Los Symbols no son enumerables en un bucle for...in o en Object.keys(), lo que los hace ideales para propiedades privadas o internas de un objeto.
// Los Symbols no son iterables

const symbol = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol === symbol2);

// Nunca son iguales
console.log(Symbol() === Symbol());

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'Torres';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
// Para acceder a la propiedad Symbol no podemos hacerlo mediente .nombre
console.log(persona.nombre);
console.log(persona[nombre]);

// Las propiedades que utilizan un Symbol no son interables
for (const propiedad in persona) {
    console.log(propiedad);
}

// Definir una descripcion del Symbol
const cliente = {};
const nombreCliente = Symbol('Nombre del cliente');

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);