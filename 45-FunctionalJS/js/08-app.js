// Closures
// Son funciones que tienen acceso a su contexto léxico, incluso cuando se ejecutan fuera de ese contexto.
// Esto significa que una función interna puede acceder a las variables de su función externa, incluso después
// de que la función externa haya terminado de ejecutarse.

const cliente = 'Juan';

function mostrarCliente() {
    // Scope dentro de la funcion
    const cliente = 'Pablo';

    console.log(cliente);
}

mostrarCliente();

// Closure
const obtenerCliente = () => {
    const nombre = 'Pedro';

    function mostrarCliente() {
        console.log(nombre);
    }

    return mostrarCliente;
}

const nombre = obtenerCliente();
nombre();