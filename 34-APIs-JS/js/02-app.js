// Intersection Observer
// Detectar cuando un elemento entra en el viewport
// Permite ejecutar una función cuando un elemento entra o sale del viewport
// Muy útil para cargar imágenes, vídeos, etc. de forma diferida

document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            console.log('Ya esta visible');
        }
    });

    observer.observe(document.querySelector('.premium'));

});