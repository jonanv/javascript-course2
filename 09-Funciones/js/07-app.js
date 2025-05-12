// Cómo se comunican las funciones entre sí

function iniciarApp() {
    console.log("Iniciando la app...");
    cargarDatos();
}

function cargarDatos() {
    console.log("Cargando datos...");
    setTimeout(() => {
        console.log("Datos cargados");
        autenticarUsuario('Luis');
    }, 3000);
}

function autenticarUsuario(usuario) {
    console.log("Autenticando usuario...");
    setTimeout(() => {
        console.log(`Usuario ${usuario} autenticado`);
    }, 2000);
}

iniciarApp();