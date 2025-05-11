// Construcción de objetos

// Object literal
// const persona = {
//     nombre: 'John',
//     edad: 30,
//     hablar: function() {
//         console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
//     }
// }

// Object constructor
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.hablar = function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona = new Persona('John', 30);
console.log(persona);