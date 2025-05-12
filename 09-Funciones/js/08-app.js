// Multiples funciones que se pasan valores

function suma(a, b) {
    return a + b;
}

let resultado = suma(2, 3);
console.log(resultado); // 5


// Ejemplo más avanzado
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 0.16;
}

total = agregarCarrito(100);
total = agregarCarrito(200);
total = agregarCarrito(300);

console.log(total); // 600

let impuesto = calcularImpuesto(total);
console.log(`El total es: ${ total + impuesto } `);