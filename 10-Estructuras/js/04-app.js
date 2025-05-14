// Mayor o igual que y else if

const dinero = 500;
const totalAPagar = 500;
const tarjeta = true;

if (dinero >= totalAPagar) {
    console.log('El dinero es suficiente');
} else if (tarjeta) {
    console.log('Puedes pagar con tarjeta');
} else {
    console.log('Fondos insuficientes');
}