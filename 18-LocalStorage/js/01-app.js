// Primeros pasos con el Local Storage

// Local Storage es un objeto que nos permite almacenar datos en el navegador del usuario.
// Podemos almacenar datos en formato clave-valor

// LocalStorage vs SessionStorage
// LocalStorage: Los datos persisten incluso después de cerrar el navegador.
// SessionStorage: Los datos se eliminan al cerrar la pestaña o el navegador.

let nombre = 'Juan';

// Local Storage
// Guardamos el nombre en el Local Storage
localStorage.setItem('nombre', nombre);

// Guardamos un objeto en el Local Storage
let usuario = {
    nombre: 'Juan',
    edad: 30,
    email: 'juan@gmail.com'
};
let usuarioString = JSON.stringify(usuario); // Convertimos el objeto a una cadena JSON
console.log(usuarioString);
console.log(typeof usuarioString); // Debería ser un string
localStorage.setItem('usuario', usuarioString);

// Session Storage
// Guardamos en Session Storage
sessionStorage.setItem('nombre', nombre);