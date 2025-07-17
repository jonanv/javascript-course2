// Sintaxis de CommonJS, no necesita el "type": "module" en el package.json
// const express = require('express');

// Sintaxis de imports and exports, en el package.json debe de ir el "type":"module" para que funcione
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch((error) => console.log(error));

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar  PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((request, response, next) => {
    const date = new Date();

    response.locals.anioActual = date.getFullYear();
    response.locals.tituloPagina = 'Agencia de Viajes';
    next();
});

// Definir la carpera pública
app.use(express.static('public'));

// Agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${ port }`);
});