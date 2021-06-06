const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/horario')

router.get('/', controller.get);
