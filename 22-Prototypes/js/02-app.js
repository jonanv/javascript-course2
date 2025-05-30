// El problema de no usuar prototypes

// Object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 900);

function formatearCliente(cliente) {
    const { nombre, saldo } = cliente;
    return `El cliente ${ nombre } tiene un saldo de ${ saldo }`;
}

console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Código con Juan', 4000, ' Cursos en línea');

function formatearEmpresa(empresa) {
    const { nombre, saldo, categoria } = empresa;
    return `El cliente ${ nombre } tiene un saldo de ${ saldo } y su categoria es ${ categoria }`;
}

console.log(formatearEmpresa(CCJ));