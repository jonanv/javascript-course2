// El problema de no usuar prototypes
// En este ejemplo, creamos dos objetos diferentes para Cliente y Empresa,
// lo que significa que cada uno tiene su propia implementación de la función
// formatearCliente y formatearEmpresa, lo que puede llevar a duplicación de código
// y dificultad para mantener el código a medida que crece la aplicación.
// Además, si queremos agregar una nueva propiedad o método a ambos objetos,
// tendríamos que hacerlo en dos lugares diferentes, lo que aumenta el riesgo de errores.
// Esto es un ejemplo de código que no utiliza prototypes y puede ser mejorado
// utilizando prototypes para compartir métodos y propiedades entre objetos similares.

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