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

const paginaViajes = (request, response) => {
    response.render('viajes', {
        pagina: 'Viajes'
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