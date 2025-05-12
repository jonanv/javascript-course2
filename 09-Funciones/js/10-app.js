// Arrow Functions, funciones de flecha
// Las funciones de flecha son una forma más corta de escribir funciones en JavaScript.

// Function declaration, funcion tradicional
function aprendiendo() {
    console.log("Aprendiendo JavaScript");
}

// Function expression, funcion anónima
const aprendiendo2 = function() {
    console.log("Aprendiendo JavaScript");
}

// Arrow function con llaves y return
const aprendiendo3 = () => {
    return "Aprendiendo JavaScript";
}

// Arrow function con el return implícito
const aprendiendo4 = () => "Aprendiendo JavaScript"; // Retorna un valor

// Arrow function con parámetros
const aprendiendo5 = (curso) => `Aprendiendo ${curso}`;
console.log(aprendiendo5('JavaScript')); // Aprendiendo JavaScript
