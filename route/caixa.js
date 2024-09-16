const route = require('express').Router();

const controller = require('../controllers/caixa_control.js');


route.get('/buscar/:id_caixa', controller.getCaixa);

route.post('/abrir_caixa', controller.postCaixa);

route.patch('/fechar', controller.fecharCaixa);

module.exports = route;