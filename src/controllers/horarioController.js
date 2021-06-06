const repository = require('../service/horarioService');
// camada  responsável por trabalhar para cada requisição e definir os Status do protocolo HTTP e da regra de envio e recebimento de dados

const service = new repository();

exports.get = (req, res, next) => {
    res.status(200).send(service.getAllHorario());
};


exports.getById = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};



exports.post = (req, res, next) => {
    service.addHorario(req.body)
    res.status(201).send(req.body);
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    service.removeHorario(id);
    res.status(204).send(`Requisição recebida com sucesso! ${id}`);
};