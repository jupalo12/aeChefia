const route = require('express').Router();

const controller = require('../controllers/cliente_control');


route.get('/', (req, res) => {
    res.sendFile(__basedir + '/public/pages/cliente.html');
})


route.get('/buscar/:id_comanda', controller.getCliente);

module.exports = route;