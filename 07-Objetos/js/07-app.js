// El problema con los objectos
// Permite modificar las propiedades de un objeto si es definido como const

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

producto.disponible = false;

console.log(producto);