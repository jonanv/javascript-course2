// Añadir funciones en un objeto

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
}

// Añadir una función al objeto
reproductor.borrarCancion = function(id) {
    console.log(`Borrando la canción con el id: ${id}`);
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist('Mi playlist');
reproductor.borrarCancion(30);