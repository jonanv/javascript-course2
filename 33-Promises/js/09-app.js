// Promise.try
// ¿Qué diferencia hay con Promise.resolve().then(function)?
// ¿Por qué no envolver simplemente tu callback con Promise.resolve? Hay una diferencia clave y es que el callback que le pasamos al then() siempre se ejecuta de forma asíncrona.

// En cambio Promise.try intenta ejecutar la función de manera sincrónica y, si puede, resuelve la promesa inmediatamente.

// Además, al combinar Promise.try() con .catch() y .finally(), puedes manejar tanto errores síncronos como asíncronos en una sola cadena de promesas. Esto hace que el manejo de errores con promesas sea muy similar al manejo de errores en código sincrónico, lo que lo vuelve más simple y predecible.

// Este comportamiento permite que Promise.try() capture y maneje errores de cualquier tipo (sincrónicos o asíncronos) en un flujo uniforme, mientras que Promise.resolve es algo más limitado o requiere más código.

function hacerAlgo() {
    if (true) throw new Error('Algo salió mal');
    if (false) return Promise.resolve('Promesa resuelta');
    if (false) return 'Síncrono';
}

Promise.try(hacerAlgo)
    .then((result) => {
        console.log('Resultado:', result);
    })
    .catch((error) => {
        console.error('El fallo es:', error);
    })
    .finally(() => {
        console.log('Operación finalizada');
    });