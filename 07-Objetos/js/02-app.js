// Acceder a los elementos de un objeto

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
console.log(persona.nombre);
console.log(persona["nombre completo"]());