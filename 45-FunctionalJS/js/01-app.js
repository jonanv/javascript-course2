// Que es funcional JavaScript
// es un paradigma de programación que trata a las funciones como ciudadanos de primera clase
// lo que significa que las funciones pueden ser asignadas a variables, pasadas como argumentos y
// devueltas desde otras funciones. Esto permite un estilo de programación más declarativo y modular.
// En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden ser
// manipuladas como cualquier otro objeto. Esto permite crear funciones de orden superior, que son
// funciones que toman otras funciones como argumentos o devuelven funciones como resultado.

// First-class functions
// Es poder crear funciones que parezcan variables como lo es function expression.
// Es asignar una funcion como si fuera una variable, y poder pasarla como argumento a otra funcion.

const suma = function(a, b) {
    return a + b;
}
const resultado = suma;

console.log(resultado(10, 20));