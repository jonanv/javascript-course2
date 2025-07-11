// Creando un mini Framework con testing

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

let resultado = suma(1, 2);
let esperado = 3;

if (resultado !== esperado) {
    console.error(`El resultado: ${ resultado } es diferente a lo esperado; la prueba no pasó`);
} else {
    console.log('La prueba paso correctamente');
}

resultado = resta(10, 7);
esperado = 5;

if (resultado !== esperado) {
    console.error(`El resultado: ${ resultado } es diferente a lo esperado; la prueba no pasó`);
} else {
    console.log('La prueba paso correctamente');
}