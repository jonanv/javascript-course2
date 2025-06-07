// Modificadores de acceso, propiedades privadas en JS

// Class declaration
class Cliente {
    #nombre; // Propiedad privada
    saldo; // Propiedad pública

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

    mostrarInformacion() {
        return `Cliente: ${ this.#nombre }, saldo es de $${ this.saldo }`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}

// Instancia de clase
const cliente = new Cliente('Juan', 400);
console.log(cliente);
console.log(cliente.mostrarInformacion());
// console.log(cliente.#nombre); // No se puede acceder a la propiedad porque es privada

cliente.setNombre('Pedro');
console.log(cliente.getNombre());