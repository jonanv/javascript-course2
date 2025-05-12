// Diferencias entre function declaration y funtion expression

// Function Declaration
// Function declaration se pueden llamar antes de ser declaradas
restar(5, 2);

function restar(a, b) {
    console.log(a + b);
}

// Function Expression
// Function expression NO se pueden llamar antes de ser declaradas
sumar(2, 3);

const sumar = function (a, b) {
    console.log(a + b);
};

// La diferencia consiste en el hoisting
// El hoisting es un comportamiento de JavaScript en el que las declaraciones de funciones y 
// variables son elevadas a la parte superior de su contexto de ejecución.
// En el caso de las function declarations, el hoisting permite que la función sea llamada antes de su declaración