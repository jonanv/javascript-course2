// Métodos y métodos estaticos en las clases

// Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${ this.nombre }, saldo es de $${ this.saldo }`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}

// Instancia de clase
const cliente = new Cliente('Juan', 400);
console.log(cliente);
console.log(cliente.mostrarInformacion());

// Pertenece a la clase y no al objeto por ser static
// No requieren una instancia desde la clase
console.log(Cliente.bienvenida());

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${ this.nombre }, saldo es de $${ this.saldo }`;
    }
}

const cliente2 = new Cliente2('Juan', 400);
console.log(cliente2);
console.log(cliente2.mostrarInformacion());