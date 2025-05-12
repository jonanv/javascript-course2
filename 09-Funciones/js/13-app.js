// Arrow functions en objectos

const reproductor = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo canción con el id: ${id}`),
    pausar: () => console.log('Pausando...'),
    crearPlaylist: (nombre) => console.log(`Creando la playlist: ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`La canción actual es: ${this.cancion}`)
    }
}

// Añadir una función al objeto
reproductor.borrarCancion = (id) => console.log(`Borrando la canción con el id: ${id}`);

reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist('Mi playlist');
reproductor.borrarCancion(30);

reproductor.nuevaCancion = 'La canción del verano';
reproductor.obtenerCancion;