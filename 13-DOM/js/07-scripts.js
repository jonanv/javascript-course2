// Cambiar el CSS

// Cambiar el color de fondo
document.body.style.backgroundColor = "lightblue";

const h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "black";

const card = document.querySelector(".card");
// console.log(card);
card.classList.add("bg-primary", "text-light");
card.classList.remove("card");