// Class Pattern - Patron Clase
// Clase que representa un objeto de tipo Persona
// Es un patron de diseño que permite crear objetos con una estructura definida

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'juan@gmail.com');
console.log(persona);