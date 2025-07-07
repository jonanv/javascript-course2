export function mostrarAlerta(mensaje, tipo) {
    const alertaPrevia = document.querySelector('.alerta');
    alertaPrevia?.remove();

    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta', 'px-4', 'py-3', 'rounded', 'mx-w-lg', 'mx-auto', 'mt-6', 'border', 'text-center');
    alerta.textContent = mensaje;

    tipo === 'error'
        ? alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700')
        : alerta.classList.add('bg-green-100', 'border-green-400', 'text-green-700');

    formulario.appendChild(alerta);

    setTimeout(() => {
        // alerta.remove();
    }, 3000);
}