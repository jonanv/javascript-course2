// IIFE
// IIFE: Expresión de función ejecutada inmediatamente
// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.

// con function anonima
(function() {
    
})();

// Con arrow function
(() => {
    console.log('Desde un IIFE');

    // Dentro del modulo la propiedad no es accesible desde otro archivo
    // const nombreCliente = 'Juan';

    // con window la propiedad si es accesible desde otro archivo
    // window.nombreCliente = 'Juan';
})();

export const nombreCliente = 'Juan';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${ nombre }, Ahorro: ${ ahorro }`;
}

export function tieneSaldo(ahorro) {
    if (ahorro) {
        return 'Si tiene saldo';
    } else {
        return 'No tiene saldo';
    }
}