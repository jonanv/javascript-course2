// Event Loop o Loop de Eventos en JavaScript
// Es un mecanismo que permite a JavaScript ejecutar código, recolectar y procesar eventos, y realizar operaciones en segundo plano sin bloquear el hilo principal de ejecución.
// El Event Loop es responsable de gestionar la ejecución de código, la recolección de eventos y la ejecución de tareas asíncronas en JavaScript.
// El Event Loop permite que JavaScript sea no bloqueante y asíncrono, lo que significa que puede manejar múltiples tareas al mismo tiempo sin detener la ejecución del código principal.

// 1. 📒 Tareas JavaScript
// 2. 🐜 Microtareas WebAPI
// 3. 📝 Tareas WebAPI

console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise(function(resolve) {
    resolve('Desconocido...');
}).then(console.log);

console.log('Ultimo');


// 1. 📒 Tareas JavaScript
// 2. 🐜 Microtareas WebAPI
// 3. 📝 Tareas WebAPI

console.log('📒 Tarea 1');

setTimeout(() => console.log('📝 Tarea 2'));

Promise.resolve().then(() => console.log('🐜 Microtarea 3'));

Promise.resolve().then(() => setTimeout(() => console.log('📝 Tarea 4')));

Promise.resolve().then(() => console.log('🐜 Microtarea 5'));

setTimeout(() => console.log('📝 Tarea 6'));

console.log('📒 Tarea 7');

// 1
// 7
// 3
// 5
// 2
// 6
// 4