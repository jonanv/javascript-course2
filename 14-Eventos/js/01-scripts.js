// Detectar cuando el HTML esta listo

console.log(1);

// Ejemplo de uso de DOMContentLoaded
// Este evento se dispara cuando el DOM (Documento) ha sido completamente cargado y analizado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento cargado y listo para ser manipulado');
    console.log(2);
});

console.log(3);