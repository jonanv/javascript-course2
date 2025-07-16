import express from 'express';

const router = express.Router();

// req - lo que enviamos
// res - lo que express nos responde
router.get('/', (request, response) => {
    response.send('Inicio');

    // response.json({
    //     id: 1
    // });

    // response.render();
});

router.get('/nosotros', (request, response) => {
    response.render('nosotros.pug');
});

export default router;