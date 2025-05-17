// Evento submit a un formulario

const formulario = document.querySelector("#formulario");

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault(); // Evita que se recargue la página al enviar el formulario
//     console.log("Formulario enviado");
//     const busqueda = document.querySelector(".busqueda").value;
//     console.log(`Búsqueda: ${busqueda}`);
//     formulario.reset(); // Limpia el formulario después de enviarlo
// });

formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario
    console.log("Buscando...");
    console.log(e.target.action); // Muestra la URL a la que se envía el formulario
}