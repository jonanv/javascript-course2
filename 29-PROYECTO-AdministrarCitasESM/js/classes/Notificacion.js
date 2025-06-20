export default class Notificacion {
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