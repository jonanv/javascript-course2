// Definiendo e instanciando una clase

// Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

// Instancia de clase
const cliente = new Cliente('Juan', 400);
console.log(cliente);

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const cliente2 = new Cliente2();
console.log(cliente2);