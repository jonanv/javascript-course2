// Generar HTML con JavaScript

// Crear un elemento
const enlace = document.createElement("a");

// Añadirle un texto
enlace.textContent = "Mi enlace";
// Añadirle un atributo
enlace.setAttribute("href", "https://www.google.com");
// Añadirle un atributo de estilo
enlace.setAttribute("target", "_blank");

const navegacion = document.querySelector(".navegacion");

// Añadir el elemento al DOM
navegacion.appendChild(enlace);

// Insertar un elemento antes de otro
navegacion.insertBefore(enlace, navegacion.children[1]);


// Crear CARD
const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$200 dolares";
parrafo3.classList.add("precio");

// Crear el contenedor de la info
const info = document.createElement("div");
info.classList.add("info");
info.append(parrafo1, parrafo2, parrafo3);

// Crear la imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";
imagen.alt = "Texto alternativo de la imagen";

// Crear la card
const card = document.createElement("div");
card.classList.add("card");
card.appendChild(imagen);
card.appendChild(info);

// Añadir la card al contenedor
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card);