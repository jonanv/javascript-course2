function imprimirAlerta(mensaje, tipo) {
    // Eliminar las alertas duplicadas
    const alerta = document.querySelector('.alerta');

    if (!alerta) {
        // Crear alerta
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('px-4', 'py-10', 'rounted', 'mx-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');
        divMensaje.textContent = mensaje;

        tipo === 'error'
            ? divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700')
            : divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');

        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}