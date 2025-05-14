// for in

const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Desarrollador',
    pais: 'España'
}

for (const key in persona) {
    console.log(persona[key]); // Juan, 30, Desarrollador, España
    console.log(key); // nombre, edad, profesion, pais
}

for (const [key, value] of Object.entries(persona)) {
    console.log(key, value);
}