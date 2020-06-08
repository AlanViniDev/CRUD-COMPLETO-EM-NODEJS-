const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require ("fs");
// importa as rotas
const smartphone = require("./route/smartphone.route"); // Importa rota

app.use("/smartphones",smartphone);

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/smartphone';

const port = 8000;

MongoClient.connect(url, function (err, db) {
  console.log('MongoDB Conectado!');
 
  var app = express();
    
  // db.close()
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
app.listen(8000, () => {
    console.log('Servidor Iniciado na Porta ' + port);
});

/*
(function readyJS(win,doc){
  'use strict';
  let ajax = new XMLHttpRequest();
  ajax.open('GET','http://localhost:8000');
  ajax.onreadystatechange = function () {
  console.log(ajax.responseText);
}
ajax.send();
})();
*/








