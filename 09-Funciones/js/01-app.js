// Crear funciones - Funtion Expression y Function Declaration

// Expresión de función - Function Expression
// Son funciones anónimas que se asignan a una variable
const suma = function (a, b) {
    return a + b;
}

console.log({ suma: suma(5, 10) }); // 15

// Declaración de función - Function Declaration
// Son funciones que se declaran con la palabra reservada function
function resta(a, b) {
    return a - b;
}

console.log({ resta: resta(10, 5) }); // 5