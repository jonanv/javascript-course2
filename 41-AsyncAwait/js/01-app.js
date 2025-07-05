// Que es try-catch
// try-catch es una estructura de control que nos permite manejar errores en tiempo de ejecución.
// Nos permite intentar ejecutar un bloque de código y, si ocurre un error, capturarlo
// y manejarlo de manera controlada, evitando que el programa se detenga abruptamente.

// console.log(1 + 1);

// hola(); -> Funcion no esta definida

// console.log(2 + 2);

console.log(1 + 1);

try {
    hola();
} catch (error) {
    console.log(error);
}

console.log(2 + 2);