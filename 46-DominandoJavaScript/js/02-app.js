// Hoisting
// Javascript primero interpreta el código y luego lo ejecuta, lo que significa que las declaraciones de funciones y variables son "elevadas" al inicio de su contexto de ejecución.

// Hoisting significa "elevación" en inglés y se refiere a cómo JavaScript maneja las declaraciones de funciones y variables.
// Es una característica de JavaScript que permite que las declaraciones de funciones y variables sean "elevadas" al inicio de su contexto de ejecución, lo que significa que se pueden utilizar antes de ser declaradas en el código.
// Esto aplica a las declaraciones de funciones, pero no a las expresiones de funciones o variables declaradas con let o const.
// Ejemplo de hoisting con funciones
// En este ejemplo, la función se puede llamar antes de su declaración debido al hoisting.
// Sin embargo, si se usa una expresión de función, no se puede llamar antes de su declaración, lo que resultará en un error.
// Para las variables declaradas con var, el hoisting las eleva, pero su valor será undefined hasta que se les asigne un valor.

// Function declaration
obtenerCliente('Juan');

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es: ${ nombre }`);
}

// Function expression
obtenerCliente2('Pedro');

const obtenerCliente2 = (nombre) => {
    console.log(`El nombre del cliente es: ${ nombre }`);
}