// El objeto Date()

const diaHoy = new Date();
console.log(diaHoy);

let fecha = new Date('1-23-1992');
console.log(fecha);

fecha = new Date('January 23 1992');
console.log(fecha);

const year = fecha.getFullYear();
console.log(year);
const month = fecha.getMonth();
console.log(month);

let valor;

valor = diaHoy.getMinutes();
console.log(valor);
valor = diaHoy.getHours();
console.log(valor);
valor = diaHoy.getTime();
console.log(valor);