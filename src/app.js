//define as bibliotecas necessárias para executar a api
// express faz a aplicação trabalhar como api
// body parser transforma a informação em JSON
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

//Rotas
const index = require('./routes/index');
const horarioRoute = require('./routes/horarioRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/horario', horarioRoute);

module.exports = app;