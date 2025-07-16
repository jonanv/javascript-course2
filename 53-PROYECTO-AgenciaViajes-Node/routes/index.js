import express from 'express';

const router = express.Router();

// req - lo que enviamos
// res - lo que express nos responde
router.get('/', (request, response) => {
    response.render('inicio', {
        pagina: 'Inicio'
    });
});

router.get('/nosotros', (request, response) => {
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
});

router.get('/viajes', (request, response) => {
    response.render('viajes', {
        pagina: 'Viajes'
    });
});

router.get('/testimonios', (request, response) => {
    response.render('testimonios', {
        pagina: 'Testimonios'
    });
});

export default router;