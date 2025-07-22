import { Testimonio } from "../models/Testimonios.js";

const guardarTestimonio = async (request, response) => {
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
        errores.push({ mensaje: 'El campo mensaje esta vacio' });
    } 
    
    if (errores.length > 0) {
        // Consultar DB
        const testimonios = await Testimonio.findAll();

        // Mostrar la vista con errores
        response.render('testimonios', {
            pagina: 'Testimonios',
            testimonios,
            errores,
            nombre,
            correo,
            mensaje
        });
    } else {
        // Almacenarlo en la base de datos
        try {
            await Testimonio.create({
                nombre,
                correo,
                mensaje
            });

            response.redirect('/testimonios');
        } catch (error) {
            console.error(error);
        }
    }
};

export {
    guardarTestimonio
}