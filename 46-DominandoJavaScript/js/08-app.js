// Que es Self
// Self es una referencia al objeto global en un contexto de Worker, que es un hilo de ejecución separado del hilo principal de la aplicación. En el contexto de un Worker, Self se refiere al propio Worker y permite acceder a sus propiedades y métodos.
// En un Worker, Self es similar a Window en el contexto del hilo principal de la aplicación. Proporciona un entorno aislado donde se pueden ejecutar tareas en segundo plano sin bloquear la interfaz de usuario principal.

// window === self; // true
// window.self === self; // true

// window.onload = () => {
//     console.log('Ventana cargada');
// };

self.onload = () => {
    console.log('Ventana cargada');
};

window.color = 'Rojo';

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        // const self = this;
        return `El producto: ${ this.nombre } tiene un precio de ${ this.precio } y el color es ${ self.color }`;
    }
}

// Se puede acceder a self en el color porque el objecto window hace referencia a la ventana global

console.log(producto.mostrarInfo());