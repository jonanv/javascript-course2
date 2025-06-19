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
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${ this.nombre }, Ahorro: ${ this.ahorro }`;
    }
}

// Solo puede haber 1 export default por archivo, no puede haber mas de 1
// Puede ir sin nombre
/*
export default function() {
    console.log('Este es un export default');
}
*/
export default function nuevaFuncion() {
    console.log('Este es un export default');
}