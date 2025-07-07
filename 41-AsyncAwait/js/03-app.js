// Async await en function expression y function declaration
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

// Async await function expression
const ejecutar = async () => {
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