// Primeros pasos con el Local Storage

// Local Storage es un objeto que nos permite almacenar datos en el navegador del usuario.
// Podemos almacenar datos en formato clave-valor

// LocalStorage vs SessionStorage
// LocalStorage: Los datos persisten incluso después de cerrar el navegador.
// SessionStorage: Los datos se eliminan al cerrar la pestaña o el navegador.

let nombre = 'Juan';

// Guardamos el nombre en el Local Storage
localStorage.setItem('nombre', nombre);
