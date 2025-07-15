// Sintaxis de CommonJS, no necesita el "type": "module" en el package.json
// const express = require('express');

// Sintaxis de imports and exports, en el package.json debe de ir el "type":"module" para que funcione
import express from 'express';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// req - lo que enviamos
// res - lo que express nos responde
app.get('/', (request, response) => {
    response.send('Inicio');

    // response.json({
    //     id: 1
    // });

    // response.render();
});

app.get('/nosotros', (request, response) => {
    response.send('Nosotros');
});

app.get('/Contacto', (request, response) => {
    response.send('Contacto');
});

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${ port }`);
});