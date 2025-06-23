// Promise.withResolvers
Promise.withResolvers()
// Con Promise.withResolvers(), no necesitas escribir código adicional para capturar resolve y reject. El método te los proporciona directamente, haciendo que el código sea más limpio y fácil de manejar.

// Este método es útil en escenarios donde necesitas crear una promesa pero no quieres inmediatamente resolverla o rechazarla, o donde el control sobre la resolución de la promesa ocurre fuera de la función en la que fue creada. Promise.withResolvers() facilita este control sin necesidad de estructuras complicadas.

// Por eso también, como habrás visto en el vídeo, puede ser interesante cuando trabajamos con eventos.

// Y es que Promise.withResolvers() es especialmente útil en patrones de trabajo asíncronos más complejos, como en el manejo de eventos o callbacks que pueden necesitar acceso a las resoluciones de las promesas desde fuera de su bloque de creación.

// Usando Promise.withResolvers()

// ✅ Código usando Promise.withResolvers()
const { promise, resolve, reject } = Promise.withResolvers()

resolve('Operación completada');

promise.then((result) => {
    console.log(result); // 'Operación completada'
})