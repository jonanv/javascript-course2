(function() {
    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
    });

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = () => {
            console.error('Hubo un error');
        };

        abrirConexion.onsuccess = () => {
            DB = abrirConexion.result;
        }
    }

})();