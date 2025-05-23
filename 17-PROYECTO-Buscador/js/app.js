// Variables
const resultado = document.querySelector('#resultado');

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
});

// Funciones
function mostrarAutos() {
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${ auto.marca }
        `;

        resultado.appendChild(autoHTML);
    });
}