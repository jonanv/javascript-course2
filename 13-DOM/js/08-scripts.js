// Traversing the DOM
// Significa que podemos movernos entre los nodos de un documento HTML

const nav = document.querySelector('.navegacion');
console.log(nav);
console.log(nav.childNodes); // Los espacios en blanco también son considerados nodos
console.log(nav.children); // Solo los nodos hijos que son elementos, no considera los espacios en blanco

console.log(nav.children[0]);
console.log(nav.children[0].nodeName); // Nombre del nodo
console.log(nav.children[0].nodeType); // Tipo de nodo

const card = document.querySelector('.card');
console.log(card);

console.log(card.children[1].children[1].textContent); // Accediendo al texto de un elemento hijo
card.children[1].children[1].textContent = 'Nuevo Heading Traversion the DOM'; // Cambiando el texto de un elemento hijo
card.children[1].children[1].innerHTML = '<h2>Nuevo Heading Traversion the DOM</h2>'; // Cambiando el HTML de un elemento hijo

// Traversion de hijo al padre
console.log(card.parentNode); // Accediendo al padre por nodo incluyendo espacios en blanco
console.log(card.parentElement); // Accediendo al padre por elemento
console.log(card.parentElement.parentElement); // Accediendo al abuelo

// Pasar a un hermano
console.log(card.nextElementSibling); // Accediendo al siguiente hermano
console.log(card.previousElementSibling); // Accediendo al hermano anterior

// Acceder al ultimo hermano
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);

console.log(card.firstElementChild); // Accediendo al primer hijo
console.log(card.lastElementChild); // Accediendo al último hijo