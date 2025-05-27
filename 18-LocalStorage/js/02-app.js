// Obtener datos del LocalStorage

let nombre = localStorage.getItem('nombre');
console.log(nombre); // Debería mostrar 'Juan'

let usuario = localStorage.getItem('usuario');
console.log(JSON.parse(usuario)); // Debería mostrar el objeto usuario
console.log(typeof JSON.parse(usuario)); // Debería ser un objeto