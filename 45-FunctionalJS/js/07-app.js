// Funciones que retornan funciones

const obtenerCliente = () => () => console.log('Juan');

const fn = obtenerCliente();

fn();