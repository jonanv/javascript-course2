// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');
const btnFormulario = document.querySelector('#formulario-cita input[type="submit"]');
const contenedorCitas = document.querySelector('#citas');

let editando = false;

// Objecto de la cita
// Object literal
const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
}

let DB;

window.onload = () => {
    eventListeners();

    createDB();
};

// Events
function eventListeners() {
    pacienteInput.addEventListener('change', llenarCampoCita);
    propietarioInput.addEventListener('change', llenarCampoCita);
    emailInput.addEventListener('change', llenarCampoCita);
    fechaInput.addEventListener('change', llenarCampoCita);
    sintomasInput.addEventListener('change', llenarCampoCita);
    
    formulario.addEventListener('submit', enviarFormulario);
}

// Class
class Notificacion {
    constructor({texto, tipo}) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrarNofiticacion();
    }

    mostrarNofiticacion() {
        // Crear notificación
        const alerta = document.createElement('div');
        alerta.classList.add('alert', 'text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'uppercase', 'font-bold', 'text-sm');

        // Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();

        // Si es de tipo error, agrega la clase
        this.tipo === 'error' 
            ? alerta.classList.add('bg-red-500') 
            : alerta.classList.add('bg-green-500');

        // Insertar texto
        alerta.textContent = this.texto;
        // Insertar en el DOM
        formulario.parentElement.insertBefore(alerta, formulario);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

class AdminCitas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];
        this.mostrarCitas();
    }

    editarCita(citaActualizada) {
        this.citas = this.citas.map((cita) => cita.id === citaActualizada.id ? citaActualizada : cita);
        this.mostrarCitas();
    }

    eliminarCita(id) {
        this.citas = this.citas.filter((cita) => cita.id !== id);
        this.mostrarCitas();
    }

    mostrarCitas() {
        // Limpiar el HTML
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        const objectStore = DB.transaction('citas').objectStore('citas');

        // Si no hay citas
        const totalCitas = objectStore.count();
        totalCitas.onsuccess = function() {
            if(totalCitas.result === 0) {
                contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
                return;
            }
        }

        objectStore.openCursor().onsuccess = function(e) {
            // console.log(e.target.result);
            const cursor = e.target.result;

            if (cursor) {
                const { paciente, propietario, email, fecha, sintomas } = cursor.value;

                const divCita = document.createElement('div');
                divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl', 'p-3');

                const pacienteHTML = document.createElement('p');
                pacienteHTML.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
                pacienteHTML.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${paciente}`;

                const propietarioHTML = document.createElement('p');
                propietarioHTML.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
                propietarioHTML.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${propietario}`;

                const emailHTML = document.createElement('p');
                emailHTML.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
                emailHTML.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${email}`;

                const fechaHTML = document.createElement('p');
                fechaHTML.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
                fechaHTML.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${fecha}`;

                const sintomasHTML = document.createElement('p');
                sintomasHTML.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
                sintomasHTML.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${sintomas}`;

                // Botones de eliminar y editar
                const btnEditar = document.createElement('button');
                btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
                btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
                // Event handler
                btnEditar.onclick = () => cargarEdicion(cita);

                const btnEliminar = document.createElement('button');
                btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
                btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
                // Event handler
                btnEliminar.onclick = () => eliminarCita(cita);

                const contenedorBotones = document.createElement('div');
                contenedorBotones.classList.add('flex', 'justify-between', 'mt-10');

                contenedorBotones.appendChild(btnEditar);
                contenedorBotones.appendChild(btnEliminar);

                // Agregar al HTML
                divCita.appendChild(pacienteHTML);
                divCita.appendChild(propietarioHTML);
                divCita.appendChild(emailHTML);
                divCita.appendChild(fechaHTML);
                divCita.appendChild(sintomasHTML);
                divCita.appendChild(contenedorBotones);
                // Agregar div al contenedor
                contenedorCitas.appendChild(divCita);

                // Ir al siguiente elemento
                cursor.continue();
            }
        }
    }
}

// Functions
function llenarCampoCita(e) {
    citaObj[e.target.name] = e.target.value;
    // console.log(citaObj);
}

const adminCitas = new AdminCitas();

function enviarFormulario(e) {
    e.preventDefault();

    if (Object.values(citaObj).some(value => value.trim() === '')) {
        new Notificacion({
            texto: 'Todos los campos estan vacíos.', 
            tipo: 'error'
        });
        return;
    }

    if (editando) {
        adminCitas.editarCita({...citaObj});
        new Notificacion({
            texto: 'Guardado correctamente', 
            tipo: 'success'
        });
        btnFormulario.value = 'Registrar Paciente';
        editando = false;
    } else {
        adminCitas.agregarCita({...citaObj});
        crearCita({...citaObj});
    }

    reiniciarObjectoCita();
}

function reiniciarObjectoCita() {
    // Reiniciar objecto
    // citaObj.paciente = '';
    // citaObj.propietario = '';
    // citaObj.email = '';
    // citaObj.fecha = '';
    // citaObj.sintomas = '';

    // Reiniciar objeto con assign
    // Object.assign(citaObj, {
    //     paciente: '',
    //     propietario: '',
    //     email: '',
    //     fecha: '',
    //     sintomas: '',
    // });

    for (const element in citaObj) {
        citaObj[element] = '';
    }
    citaObj.id = generarId();

    formulario.reset();
}

function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}

function cargarEdicion(cita) {
    Object.assign(citaObj, cita);
    
    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando = true;
    btnFormulario.value = 'Guardar cambios';
}

function eliminarCita(cita) {
    adminCitas.eliminarCita(cita.id);
}

function createDB() {
    // Crear la base de datos en version 1.o
    const citasDB = window.indexedDB.open('citas', 1);

    // Error
    citasDB.onerror = function() {
        console.log('Hubo un error');
    }
    
    // Success
    citasDB.onsuccess = function() {
        console.log('Base de datos creada');
        DB = citasDB.result;
        adminCitas.mostrarCitas();
    }

    // Configuration - Definir el schema
    citasDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id',
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex('id', 'id', { unique: true });
        objectStore.createIndex('paciente', 'paciente', { unique: false });
        objectStore.createIndex('propietario', 'propietario', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });

        console.log('Columnas creadas');
    }
}

function crearCita(nuevoCliente) {
    let transaction = DB.transaction(['citas'], 'readwrite');
    const objectStore = transaction.objectStore('citas');
    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
    
    transaction.oncomplete = function() {
        console.log('Transacción completada');
        new Notificacion({
            texto: 'Paciente registrado', 
            tipo: 'success'
        });
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transacción');
    }
}