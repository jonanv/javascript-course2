// Operador || para validar que se complen al menos 1 condiciones

const dinero = 1000;
const totalAPagar = 1500;
const tarjeta = false;

if (dinero >= totalAPagar || tarjeta) {
    console.log("Si puedes pagar");
} else {
    console.log("No puedes pagar");
}