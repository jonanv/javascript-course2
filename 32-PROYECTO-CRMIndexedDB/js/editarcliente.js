(function() {
    let DB;
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        // Actualiza el registro
        formulario.addEventListener('submit', enviarFormulario);

        // Verificar el id de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get('id');
        if (idCliente) {
            obtenerCliente(idCliente);
        }
    });

    function obtenerCliente(idCliente) {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = () => {
            console.error('Hubo un error');
        };

        abrirConexion.onsuccess = () => {
            DB = abrirConexion.result;

            const transaction = DB.transaction(['crm'], 'readwrite');
            const objectStore = transaction.objectStore('crm');
    
            const cliente = objectStore.openCursor();
            cliente.onsuccess = (e) => {
                const cursor = e.target.result;
    
                if (cursor) {
                    if (cursor.value.id === idCliente) {
                        llenarFormulario(cursor.value);
                    }
                    cursor.continue;
                }
            };
        };
    }

    function llenarFormulario(cliente) {
        const { nombre, email, telefono, empresa } = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

    function enviarFormulario(e) {
        e.preventDefault();

        if (nombreInput.value.trim() === '' ||
            emailInput.value.trim() === '' ||
            telefonoInput.value.trim() === '' ||
            empresaInput.value.trim() === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        const clienteActualizado = {
            id: idCliente,
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value
        }
        actualizarCliente(clienteActualizado);
    }

    function actualizarCliente(cliente) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.put(cliente);

        transaction.onerror = () => {
            imprimirAlerta('Hubo un error en la transacción', 'error');
        }

        transaction.oncomplete = () => {
            imprimirAlerta('Cliente actualizado');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }
    }
})();