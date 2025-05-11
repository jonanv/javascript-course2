// Buenas prácticas a la hora de evaluar booleanos

const autenticado = true;

if (autenticado) {
    console.log('El usuario está autenticado');
} else {
    console.log('El usuario no está autenticado');
}

// Operador ternario
autenticado 
    ? console.log('El usuario está autenticado') 
    : console.log('El usuario no está autenticado');