// Mixin Pattern - Patron mix
// Es un patrón que permite agregar funcionalidad a una clase sin necesidad de heredar de ella.
// Se utiliza para compartir métodos entre diferentes clases sin necesidad de crear una jerarquía de herencia.

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre cliente: ${ this.nombre }, Email: ${ this.email }`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es: ${ this.nombre }`);
    }
}

// Añadir funciones a la clase de persona
Object.assign(
    Persona.prototype,
    funcionesPersona
);
Object.assign(
    Cliente.prototype,
    funcionesPersona
);

const cliente = new Persona('Juan', 'juan@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Cliente('pedro', 'pedro@cliente.com');

console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();