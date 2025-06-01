// Creando un prototype

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

const pedro = new Cliente('Pedro', 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(300);
console.log(pedro.nombreClienteSaldo());

console.log(pedro);

// Usando la funcion de prototype
pedro.tipoCliente();