// Namespace Pattern - Patron namespace
// Este patrón se utiliza para encapsular el código y evitar la contaminación del espacio de nombres global.
// Permite organizar el código en módulos y agrupar funcionalidades relacionadas.
// No chocan los nombres de las funciones

const restauranteApp = {

};

restauranteApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 15
    }
];

restauranteApp.funciones = {
    mostrarMenu: (platillos) => {
        console.log('Bienvenidos a nuestro menu');

        platillos.forEach((platillo, index) => {
            console.log(`${ index }: ${ platillo.platillo } $${ platillo.precio }`);
        });
    },
    ordenar: (id) => {
        console.log(`Tu platillo: ${ restauranteApp.platillos[id].platillo } se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevoPlatillo = {
            platillo, 
            precio
        }
        restauranteApp.platillos.push(nuevoPlatillo);
    }
};

const { platillos } = restauranteApp;

restauranteApp.funciones.mostrarMenu(platillos);
restauranteApp.funciones.ordenar(1);
restauranteApp.funciones.agregarPlatillo('Lassagna', 25);
restauranteApp.funciones.mostrarMenu(platillos);