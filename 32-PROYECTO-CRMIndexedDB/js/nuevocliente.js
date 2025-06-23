(function() {
    let DB;

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    });

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = () => {
            console.error('Hubo un error');
        };

        abrirConexion.onsuccess = () => {
            DB = abrirConexion.result;
        };
    }

    function validarCliente(e) {
        e.preventDefault();

        // Leer los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if (nombre.trim() === '' ||
            email.trim() === '' ||
            telefono.trim() === '' ||
            empresa.trim() === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        const cliente = {
            id: generarId(),
            nombre,
            email,
            telefono,
            empresa,
        };
        crearCliente(cliente);
    }

    function generarId() {
        return Math.random().toString(36).substring(2) + Date.now();
    }

    function crearCliente(cliente) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente);

        transaction.onerror = () => {
            console.error('Hubo un error en la transacción');
            imprimirAlerta('Hubo un error en la transacción', 'error');
        }

        transaction.oncomplete = () => {
            console.log('Transacción completada');
            imprimirAlerta('Cliente agregado correctamente');

            formulario.reset();
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }
    }
})();