// Iteradores en JavaScript

const ciudades = ['Miami', 'Roma', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 124, 235, 345]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Developer');

// Default
for (const element of ciudades)
    console.log(element);

for (const element of ordenes)
    console.log(element);

for (const element of datos)
    console.log(element);

// Entries
for (const element of ciudades.entries())
    console.log(element);

for (const element of ordenes.entries())
    console.log(element);

for (const element of datos.entries())
    console.log(element);

// Values
for (const element of ciudades.values())
    console.log(element);

for (const element of ordenes.values())
    console.log(element);

for (const element of datos.values())
    console.log(element);

// Keys
for (const element of ciudades.keys())
    console.log(element);

for (const element of ordenes.keys())
    console.log(element);

for (const element of datos.keys())
    console.log(element);