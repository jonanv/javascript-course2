// Primer ejemplo de Async-await y que es lo que hace
// async-await es una forma de manejar promesas de una manera mas sencilla
// y legible, es una sintaxis que nos permite escribir código asíncrono de manera más
// similar al código síncrono, lo que facilita la lectura y el mantenimiento del código.

function descargarCliente() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('Listado de clientes descargado correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    });
}

// Async await
async function ejecutar() {
    try {
        console.log(1);
        const respuesta = await descargarCliente();

        console.log(2 + 2);
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}

ejecutar();