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
  if (!req.query.name){
  Cinema.findAll().then( cine => {
    res.json((cine));
  });
}else{ 
const name = req.query.name;
Cinema.findAll({ where: { name: name }}).then( cine => {
   res.json((cine));
});
}
if (!req.query.estreno){
Cinema.findAll().then( cine => {
  res.json((cine))
});
}else{ 
const estreno = req.query.title;
Cinema.findAll({ where: { estreno: estreno }}).then( cine => {
 res.json((cine));
});
}
if (!req.query.provincia){
  Cinema.findAll().then( cine => {
    res.json((cine))
  });
  }else{ 
  const provincia = req.query.title;
  Cinema.findAll({ where: { provincia: provincia }}).then( cine => {
   res.json((cine));
  });
  }
});

// actor

app.get('/actor', function(req, res) {
  if (!req.query.id){
  Actor.findAll().then( cine => {
    res.json((cine))
  });
}else{ 
  const id = req.query.id;
  Actor.findAll({ where: { id: id }}).then( actores => {
     res.json((actores));
  });
  }
  if (!req.query.movie){
    Movie.findAll().then( actores => {
      res.json((actores))
    });
  }else{ 
  const movie = req.query.movie;
  Movie.findAll({ where: { movie: movie }}).then( actores => {
     res.json((actores));
  });
  }
});


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
   });