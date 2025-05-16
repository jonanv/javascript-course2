// Modificar texto o imagenes

// const h1 = document.querySelector('h1');
// h1.innerText = 'Hola desde JS';
// h1.classList.add('rojo');

const header = document.querySelector('.contenido-hero h1');
console.log(header);

console.log(header.innerText); // Si en el CSS se pone display: none, no se trae el texto
console.log(header.textContent); // Se trae el texto aunque en el CSS se ponga display: none
console.log(header.innerHTML); // Se trae el HTML