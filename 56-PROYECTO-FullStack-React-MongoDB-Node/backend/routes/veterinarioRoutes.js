import express from "express";

const router = express.Router();

router.get('/', (require, response) => {
    response.send('Desde API/VETERINARIOS');
});

router.get('/login', (require, response) => {
    response.send('Desde API/VETERINARIOS/LOGIN');
});

export default router;