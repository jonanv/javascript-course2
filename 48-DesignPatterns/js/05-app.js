// Module pattern - Patron modulo
// Este patrón permite encapsular el código y crear un espacio de nombres para evitar conflictos globales.

// La nueva forma
// const mostrarCliente = (nombre) => {
//     console.log(nombre);
// }

// export default mostrarCliente;

// La antigua forma de JS
const modulo1 = (function() {
    const nombre = 'Juan';

    function hola() {
        console.log('Hola');
    }

    return {
        nombre,
        hola
    }
})();

console.log(modulo1.nombre);
modulo1.hola();