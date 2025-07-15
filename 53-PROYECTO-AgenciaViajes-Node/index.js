// Sintaxis de CommonJS, no necesita el "type": "module" en el package.json
// const express = require('express');

// Sintaxis de imports and exports, en el package.json debe de ir el "type":"module" para que funcione
import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${ port }`);
});