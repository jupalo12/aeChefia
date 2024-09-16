const route = require('express').Router();

const controller = require('../controllers/funcionario-controller');

route.get('/cadastrar', (req, res) => {
    res.sendFile(__basedir + '/public/pages/funcionario.html');
})

route.get('/sucesso', (req, res) => {
    res.sendFile(__basedir + '/public/pages/funcionario-sucesso.html')
})

route.get('/lista', (req, res) => {
    res.sendFile(__basedir + '/public/pages/lista-funcionarios.html')
})




route.post('/inserir', controller.postFuncionario);

route.get('/todos', controller.getFunc);

route.get('/verifica', controller.verifica);

route.get( '/quantidade/:id_estabelecimento', controller.getQuantidade);

route.delete('/remover/:id_funcionario', controller.deleteFunc);

route.patch('/atualizar', controller.patchFunc);



module.exports = route;