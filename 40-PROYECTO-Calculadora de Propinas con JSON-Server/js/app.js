let cliente = {
    mensa: '',
    hora: '',
    pedido: []
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    if (mesa.trim() === '' || hora.trim() === '') {
        console.log('Los campos son obligatorios');
        return;
    }
}