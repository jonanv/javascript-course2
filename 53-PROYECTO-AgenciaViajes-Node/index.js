// Sintaxis de CommonJS
// const express = require('express');

// Sintaxis de imports and exports
import express from 'express';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${ port }`);
});