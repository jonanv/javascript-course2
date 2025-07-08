// Scope
// Es el alcance de un valor de una variable dentro o fuera de una funcion 
const cliente = 'Juan';

function mostrarCliente() {
    const cliente = 'Pedro';
    console.log(cliente);
}

mostrarCliente();