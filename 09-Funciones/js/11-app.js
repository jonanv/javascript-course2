// Las ventajas de arrow functions son:
// 1. Sintaxis más corta.
// 2. Enlace léxico de this
// 3. Mejor legibilidad.
// 4. Adecuadas para callbacks
// 5. Retorno implícito

const aprendiendo = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo('JavaScript', 'React'));