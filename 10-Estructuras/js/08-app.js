// Detener la ejecución de un if con una función

const autenticado = true;

if (autenticado) {
    console.log('Usuario autenticado');
} else {
    console.log('Usuario no autenticado');
}

const puntaje = 450;

function revisarPuntaje(puntaje) {
    if (puntaje > 400) {
        console.log('Excelente');
        return;
    }
    
    if (puntaje > 300) {
        console.log('Buen puntaje');
        return;
    } 
}

revisarPuntaje(puntaje);