// Creando un mini Framework con testing

function suma(a, b) {
    return a + b;
}

const resultado = suma(1, 2);
const esperado = 3;

if (resultado !== esperado) {
    console.error(`El resultado: ${ resultado } es diferente a lo esperado; la prueba no pasó`);
} else {
    console.log('La prueba paso correctamente');
}