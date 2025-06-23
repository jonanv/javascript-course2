(function() {
    let DB;

    const listadoClientes = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        listadoClientes.addEventListener('click', eliminarRegistro);

        if (window.indexedDB.open('crm', 1)) {
            obtenerClientes();
        }
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

    function obtenerClientes() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = () => {
            console.error('Hubo un error');
        };

        abrirConexion.onsuccess = () => {
            DB = abrirConexion.result;

            const objectStore = DB.transaction('crm').objectStore('crm');
    
            // Listar clientes
            objectStore.openCursor().onsuccess = (e) => {
                const cursor = e.target.result;
    
                if (cursor) {
                    const { id, nombre, telefono, email, empresa } = cursor.value;

                    listadoClientes.innerHTML += `
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                        </tr>
                    `;
                    
                    // Ir al siguiente elemento
                    cursor.continue();
                } else {
                    console.log('No hay más registros');
                }
            }
        };
    }

    function eliminarRegistro(e) {
        if (e.target.classList.contains('eliminar')) {
            const idCliente = e.target.dataset.cliente;

            const confirmar = confirm(`¿Esta seguro que sea eliminar el cliente con el id ${ idCliente }?`);

            if (confirmar) {
                eliminarCliente(idCliente, e);
            }
        }
    }

    function eliminarCliente(idCliente, e) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.delete(idCliente);

        transaction.onerror = () => {
            console.log('Hubo un error');
        }

        transaction.oncomplete = () => {
            console.log('Se elimino correctamente');
            e.target.parentElement.parentElement.remove();
        }
    }
})();