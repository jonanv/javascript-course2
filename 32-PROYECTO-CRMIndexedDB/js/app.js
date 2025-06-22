(function() {
    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
    });


    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1);
        
        crearDB.onerror = () => {
            console.error('Hubo un error al crear la base de datos');
        };

        crearDB.onsuccess = () => {
            DB = crearDB.result;
        };

        crearDB.onupgradeneeded = (e) => {
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });

            objectStore.createIndex('id', 'id', { unique: true });
            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('telefono', 'telefono', { unique: false });
            objectStore.createIndex('empresa', 'empresa', { unique: false });

            console.log('DB creada');
        };
    }
})();