// Heredar un prototype

// Object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Agregando prototype
Cliente.prototype.tipoCliente = function() {
    // console.log('Hola desde mi nuevo cliente');
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, saldo: ${this.saldo}, tipo: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(saldoParaRetirar) {
    this.saldo -= saldoParaRetirar;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); // Hereda el constructor de Cliente
    this.telefono = telefono;
}

// Heredar los prototypes de Cliente a Persona, debe ser antes de una instancia
Persona.prototype = Object.create(Cliente.prototype);

// Agregar el constructor que se habia perdido
Persona.prototype.constructor = Cliente;

// Instancia
const juan = new Persona('Juan', 5000, 13233222);

console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `Telefono: ${this.telefono}`;
}

console.log(juan.mostrarTelefono());