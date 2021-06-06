const express = require('express');
const router = express.Router();
const controller = require('../controllers/horarioController')

// camada define as rotas de acesso aos horários
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;