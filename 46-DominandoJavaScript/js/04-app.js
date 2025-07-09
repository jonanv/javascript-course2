// Implicit binding
// Es decir que el objeto al que se hace referencia con this es el objeto que está a la izquierda del punto en la llamada al método.

const usuario = {
    nombre: 'Juan',
    edad: 20,
    informacion() {
        console.log(`Mi nombre es ${ this.nombre } y mi edad es ${ this.edad }`);
    },
    mascota: {
        nombre: 'Hook',
        edad: 2,
        informacion() {
            console.log(`Mi nombre es ${ this.nombre } y mi edad es ${ this.edad }`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();