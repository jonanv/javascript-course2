// Constructor Pattern - Patron Constructor
// Se utiliza una clase base que sirve como pano para que las demas clases hereden de ella.
// Permite crear objetos con una estructura definida y reutilizar codigo.

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Empleado extends Persona {
    constructor(nombre, email, ocupacion) {
        super(nombre, email);
        this.ocupacion = ocupacion;
    }
}
const empleado = new Empleado('Juan', 'juan@gmail.com', 'Desarrollador');
console.log(empleado);