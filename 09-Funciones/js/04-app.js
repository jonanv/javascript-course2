// Diferencia entre funciones y métodos

// Función
function saludar(nombre) {
    return `Hola ${nombre}`;
}

// Llamar a la función
const saludoFuncion = saludar('Pedro');
console.log(saludoFuncion); // Hola Pedro

console.log(parseInt('10')); // Función

// Método
const persona = {
    nombre: 'Juan',
    saludar: function() {
        return `Hola ${this.nombre}`;
    }
};

// Llamar al método
const saludoMetodo = persona.saludar();
console.log(saludoMetodo); // Hola Juan

console.log('10'.toString()); // Método

// Diferencia entre función y método
// Función: es un bloque de código que se puede llamar en cualquier parte del programa.
// Método: es una función que pertenece a un objeto y se llama a través de ese objeto.
// En el ejemplo anterior, saludar es una función y persona.saludar es un método.