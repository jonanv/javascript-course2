const guardarTestimonio = ((request, response) => {
    // Validar formulario
    const { nombre, correo, mensaje } = request.body;
    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El campo nombre esta vacio' });
    }
    if (correo.trim() === '') {
        errores.push({ mensaje: 'El campo correo esta vacio' });
    } 
    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El campo errores esta vacio' });
    } 
    
    console.log(errores);
});

export {
    guardarTestimonio
}