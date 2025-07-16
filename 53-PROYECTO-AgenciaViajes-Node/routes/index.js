import express from 'express';

const router = express.Router();

// req - lo que enviamos
// res - lo que express nos responde
router.get('/', (request, response) => {
    response.send('Inicio');
});

router.get('/nosotros', (request, response) => {
    const viajes = 'Viaje a Alemania';
    response.render('nosotros.pug', {
        viajes
    });
});

export default router;