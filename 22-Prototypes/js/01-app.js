// Que son los prototypes y como un tipo de objeto
// Los prototypes son una característica fundamental de JavaScript que permite la herencia y la 
// reutilización de código. Cada objeto en JavaScript tiene un prototype, que es otro objeto del 
// cual hereda propiedades y métodos. Esto permite que los objetos compartan funcionalidades 
// sin necesidad de duplicar código.

// Object literal
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

// Object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 900);
console.log(juan);
console.log(typeof juan);