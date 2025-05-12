// Parámetros por defecto

function saludar(nombre = 'Desconocido') {
    console.log(`Hola ${nombre}`);
}

saludar(); // Hola Desconocido
saludar('Juan'); // Hola Juan