// Creando un Promises con .then y .catch
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar descuento');
    }
});

aplicarDescuento
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

// Es la misma sintaxis de arriba pero mucho mas resumida, se entiende implicitamente que el parametro se pasa al metodo sin llamarse
aplicarDescuento
    .then(console.log)
    .catch(console.log);

// Hay 3 valores posibles en los Promises
// Fulfilled => success => El promise se cumplio
// Rejected => error => El promise no se cumplio
// Pending => pending => Aun no se cumple y no se ha rechazado