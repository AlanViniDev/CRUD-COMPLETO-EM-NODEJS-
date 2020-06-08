// requisições
const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express.Router();
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// requisições controller
const smartphone_controller = require("../control/smartphone.controller.js");
const view_controller =  require("../control/view.controller.js");

//rotas
router.get('/testar', smartphone_controller.testar); 
router.post('/create', smartphone_controller.smartphone_create);
router.post('/update', smartphone_controller.smartphone_update);
router.post('/delete',smartphone_controller.smartphone_delete);
router.get('/listar',smartphone_controller.smartphone_listar);
router.get('/index', view_controller.view);

module.exports = router;  
