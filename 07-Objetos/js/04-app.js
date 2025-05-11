// Destructuración de objetos

// Crear un objeto literal
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    // Métodos
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    },
    // Propiedades computadas
    ["nombre completo"]: function() {
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona);

// Destructuración de objetos
const { nombre, apellido, edad } = persona;
console.log(nombre);
console.log(apellido);
console.log(edad);