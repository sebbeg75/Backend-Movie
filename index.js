const express = require('express');
const Sequelize = require('sequelize');
const sqlite3 = require('sqlite3');


const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// importacion de modulos

const Movie = require("./models/Movie");
const Cinema = require("./models/Cinema");
const Actor = require("./models/Actor");

//movie

 app.get('/movie', function(req, res) {
   if (!req.query.id){
    Movie.findAll().then( movies => {
      res.json((movies))
    });
  }else{ 
 const id = req.query.id;
 Movie.findAll({ where: { id: id }}).then( movies => {
     res.json((movies));
});
 }

if (!req.query.title){
  Movie.findAll().then( movies => {
    res.json((movies))
  });
}else{ 
const title = req.query.title;
Movie.findAll({ where: { title: title }}).then( movies => {
   res.json((movies));
});
}
});



// cinema

app.get('/cinema', function(req, res) {
  Cinema.findAll().then( movies => {
    res.json((movies))
  });
});


// actor

app.get('/actor', function(req, res) {
  Actor.findAll().then( movies => {
    res.json((movies))
  });
});


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
   });