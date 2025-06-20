// Creando la base de datos
let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
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

        DB = crmDB.result;
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

function crearCliente() {
    // Para trabajar con las diferentes operaciones se utizan las transacciones
    // Una transaccion es cuando se revisan correctamente los pasos
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function() {
        console.log('Transacción completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 4243444,
        nombre: 'Juan',
        email: 'juan@gmail.com'
    }

    const peticion = objectStore.add(nuevoCliente);
    // put => actualizar
    // delete => eliminar
    console.log(peticion);
}