// forEach y map

const pendientes = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

// forEach
pendientes.forEach((pendiente, index) => {
    console.log(`${index + 1} - ${pendiente}`);
});

// map
const tareas = pendientes.map((pendiente, index) => {
    return `${index + 1} - ${pendiente}`;
});
console.log(tareas);