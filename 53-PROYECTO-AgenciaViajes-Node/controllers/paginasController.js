import { Testimonio } from '../models/Testimonios.js';
import { Viaje } from '../models/Viaje.js'

// req - lo que enviamos
// res - lo que express nos responde
const paginaInicio = async (request, response) => {
    // Consultar 3 vajes del modelo Viaje

    try {
        const viajes = await Viaje.findAll({ limit: 3 });
        const testimonios = await Testimonio.findAll({ limit: 3 });
    
        response.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimonios
        });
    } catch (error) {
        console.error(error);
    }
};

const paginaNosotros = (request, response) => {
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (request, response) => {
    try {
        // Consultar DB
        const viajes = await Viaje.findAll();
    
        response.render('viajes', {
            pagina: 'Viajes',
            viajes
        });
    } catch (error) {
        console.error(error);
    }
};

const paginaTestimonios = async (request, response) => {
    try {
        // Consultar DB
        const testimonios = await Testimonio.findAll();
    
        response.render('testimonios', {
            pagina: 'Testimonios',
            testimonios
        });
    } catch (error) {
        console.error(error);
    }
};

const paginaDetalleViaje = async (request, response) => {
    // Consultar DB
    const { slug } = request.params;
    
    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        response.render('detalle-viaje', {
            pagina: 'Información viaje',
            viaje
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
}