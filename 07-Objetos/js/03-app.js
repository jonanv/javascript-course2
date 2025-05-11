// Agregar o eliminar propiedades de un objeto

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

// Agregar una propiedad
persona.direccion = "Calle Falsa 123";

// Eliminar una propiedad
delete persona.edad;

// Modificar una propiedad
persona.nombre = "Pedro";

console.log(persona);