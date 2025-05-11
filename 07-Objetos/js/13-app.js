// Metodos de objeto .keys(), .values() y .entries()

// Object literal
const persona = {
    nombre: 'John',
    edad: 30,
    hablar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Object.keys() - Devuelve un array con las claves del objeto
console.log(Object.keys(persona));

// Object.values() - Devuelve un array con los valores del objeto
console.log(Object.values(persona));

// Object.entries() - Devuelve un array con las entradas del objeto (clave, valor)
console.log(Object.entries(persona));