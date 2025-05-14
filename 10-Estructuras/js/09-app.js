// Operador ternario

const autenticado = true;

let resultado = autenticado ? 'Usuario autenticado' : 'Usuario no autenticado';
console.log(resultado);

const puedePagar = true;
resultado = autenticado 
                ? puedePagar
                    ? 'Usuario autenticado y puede pagar'
                    : 'Usuario autenticado pero no puede pagar'
                : 'Usuario no autenticado';

console.log(resultado);