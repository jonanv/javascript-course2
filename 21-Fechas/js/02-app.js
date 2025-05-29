// MomentJS tu aliado para formatear fechas - Deprecado

const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM'));
console.log(moment().format('MMMM Do'));
console.log(moment().format('MMMM Do YYYY'));

console.log(moment().format('LLLL'));