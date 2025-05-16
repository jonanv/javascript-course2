// Un ejemplo de lo que podemos hacer con JS
// DOM Scripting

const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
    console.log('Diste click en el botón flotante');
    if (footer.classList.contains("activo")) {
        footer.classList.remove("activo");
        this.classList.remove("activo"); // El this hace referencia al elemento que disparó el evento
        // btnFlotante.classList.remove("activo"); // Es lo mismo que utilizar this
        this.textContent = "Idioma y Moneda"; // Cambia el texto del botón flotante
    } else {
        footer.classList.add("activo");
        this.classList.add("activo");
        this.textContent = "X Cerrar"; // Cambia el texto del botón flotante
    }
}