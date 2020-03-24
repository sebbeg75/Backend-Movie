const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sqlite3 = require('sqlite3');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


 app.get('/movie', function(req, res) {
  respuesta = {
   error: true,
   codigo: 200,
   mensaje: 'Punto de inicio'
  };
  res.send(respuesta);
 });
 

app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
   });