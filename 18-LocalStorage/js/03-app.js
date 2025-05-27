// Eliminar y modificar elementos del LocalStorage

// Eliminar un elemento del LocalStorage
localStorage.removeItem('nombre'); // Elimina el elemento con clave 'nombre'

// Modificar un elemento del LocalStorage
let usuario = JSON.parse(localStorage.getItem('usuario')); // Obtenemos el objeto usuario
usuario.edad = 31; // Modificamos la edad
localStorage.setItem('usuario', JSON.stringify(usuario)); // Guardamos el objeto modificado de nuevo en el Local Storage
console.log(usuario);

// Limpiar todo el LocalStorage
localStorage.clear(); // Elimina todos los elementos del Local Storage