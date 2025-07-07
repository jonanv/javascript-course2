// Manejo de errores JavaScript

function obtenerProductoDB(id) {
    if (id < 0) {
        throw new Error(
            'ID no válido', 
            { cause: 'ID negativo proporcionado' }
        );
    } else if (id > 100) {
        throw new Error(
            'Registro no encontrado', 
            { cause: 'ID mayor a 100 proporcionado'}
        );
    }
    return { id, nombre: 'Producto' };
}

function obtenerProducto(id) {
    try {
        return obtenerProductoDB(id);
    } catch (errorOriginal) {
        throw new Error(
            `Error al obtener el producto ${ id }`,
            { cause: errorOriginal.cause }
        );
    }
}

try {
    const producto = obtenerProducto(-5);
    console.log(`Producto: ${ producto }`);
} catch (error) {
    console.error('Error capturado:', error.message);
    console.error('Causa:', error.cause);
}