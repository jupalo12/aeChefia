const route = require('express').Router();
const controller = require('../controllers/bebida_tipo_control')



route.get('/:nome_tipo', controller.getUma);

route.get('/',  controller.getAll);

route.get('/buscar/:id_bebida_tipo', controller.getPorId);

//teste

module.exports = route;