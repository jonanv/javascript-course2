// Operador && para validar que se complen 2 o más condiciones

const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;

if (dinero >= totalAPagar && tarjeta) {
    console.log("Si puedes pagar");
} else {
    console.log("No puedes pagar");
}