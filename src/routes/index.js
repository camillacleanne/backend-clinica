
//Importar o express
const express = require('express');
const router = express.Router();

//atraves do metodo para acessar a requisição 
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

module.exports = router;
