import { Viaje } from '../models/Viaje.js'

// req - lo que enviamos
// res - lo que express nos responde
const paginaInicio = (request, response) => {
    response.render('inicio', {
        pagina: 'Inicio'
    });
};

const paginaNosotros = (request, response) => {
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (request, response) => {
    // Consultar DB
    const viajes = await Viaje.findAll();

    response.render('viajes', {
        pagina: 'Viajes',
        viajes
    });
};

const paginaTestimonios = (request, response) => {
    response.render('testimonios', {
        pagina: 'Testimonios'
    });
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios
}