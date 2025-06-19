// Que son los Maps
// Un Map es una coleccion de pares clave-valor, osn listas ordenadas
// Un Map es iterable
// Un Map mantiene el orden de insercion de los elementos
// Un Map puede tener claves de cualquier tipo, incluyendo objetos
// Un Map es mas eficiente que un objeto para manejar grandes cantidades de datos

const map = new Map();

const cliente = {
    nombre: 'Juan',
    saldo: 3000
}

// Set
map.set('nombre', 'Juan');
map.set('edad', 30);
map.set('cliente', cliente);
map.set([0], true);

// Get
console.log(map.get('nombre'));

// ForEach
map.forEach((value, key) => {
    console.log(`key: ${ key },`, `value: ${ value }`);
});

// Delete
console.log(map.delete('cliente'));

// Size
console.log(map.size);

// Has
console.log(map.has('nombre'));

// Clear
map.clear();

console.log(map);

// Asignar valores desde el constructor
const mapPaciente = new Map([['nombre', 'paciente'], ['cuarto', 'No definido']]);

mapPaciente.set('dr', 'Doctor');
// Reescribir valor
mapPaciente.set('nombre', 'Antonio');

console.log(mapPaciente);