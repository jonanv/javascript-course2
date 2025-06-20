// Creando la base de datos

document.addEventListener('DOMContentLoaded', () => {
    crmDB();
});

function crmDB() {
    // Crear la base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la Base de Datos');
    };

    // Si se creo bien
    crmDB.onsuccess = function() {
        console.log('Base de datos creada!');
    };

    // Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e) {
        // console.log(e.target.result);
        // console.log('Este metodo solo se ejecuta una sola vez');

        const db = e.target.result;

        // Permite interactuar con la base de datos
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creadas');
    }
}