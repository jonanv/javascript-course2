// Heredar una clase

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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Reescribe el metodo del padre
    static bienvenida() {
        return 'Bienvenido al cajero de empresas';
    }
}

// Instancia de clase
const cliente = new Cliente('Juan', 400);
console.log(cliente);
console.log(Cliente.bienvenida());

const empresa = new Empresa('Código con Juan', 500, '888888', 'Dev');
console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());