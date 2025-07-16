import express from 'express';

const router = express.Router();

// req - lo que enviamos
// res - lo que express nos responde
router.get('/', (request, response) => {
    response.render('inicio.pug');
});

router.get('/nosotros', (request, response) => {
    response.render('nosotros.pug');
});

export default router;