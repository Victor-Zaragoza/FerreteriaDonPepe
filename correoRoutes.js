const { Router } = require('express');
const express = require('express');
const app = express();

let envio = require ('./correoController');

app.post('/envio',envio.envioCorreo);

module.exports = Router;