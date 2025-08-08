import express from 'express';
import conectarDB from './config/db.js';

const app = express();

conectarDB();

app.use('/', (request, response) => {
    response.send('Hola mundo');
});

app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto 4000');
});