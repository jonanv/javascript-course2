// Copiar 2 objeto

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

// Copiar el objeto producto en otro objeto con Object.assign
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Copiar el objeto producto en otro objeto con el operador spread
const resultado2 = {...producto, ...medidas};
console.log(resultado2);