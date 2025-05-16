// Eliminar elementos del DOM

const primerEnlace = document.querySelector("a");
console.log(primerEnlace);

// Eliminar el primer enlace
primerEnlace.remove();

// Eliminar desde el padre
const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);