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

app.get('/movie', (req, res) => {
  if (!req.query.id && !req.query.title) {
      Movie.findAll().then( movies => {
         res.json((movies))
     });
  } else if(req.query.id) { 
      const id = req.query.id;
      Movie.findAll({ where: { id: id }}).then( movies => {
         res.json((movies));
     });
  }else{ 
      const title = req.query.title;
      Movie.findAll({ where: { title: title }}).then( movies => {
         res.json((movies));
     });
  }
});


// cinema

app.get('/cinema', (req, res) => {
  if((req.query.estreno)){
    const estreno = req.query.estreno;
    Cinema.findAll({ where: { estreno: estreno }}).then( cines => {
        res.json((cines))
     });
 }
 else if ((!req.query.name) && (!req.query.provincia)) {
     Cinema.findAll().then( cines => {
         res.json((cines));
     });
 } else if(!req.query.provincia) {
     const name = req.query.name;
     Cinema.findAll({ where: { name: name }}).then( cines => {
         res.json((cines));
     });
 }else if(!req.query.name){
     const provincia = req.query.provincia;
     Cinema.findAll({ where: { provincia: provincia }}).then( cines => {
         res.json((cines));
     });
 }
});

// actor

app.get('/actores', (req, res) => {
  if (!req.query.id && !req.query.title) {
      Actor.findAll().then( actor => {
         res.json((actor))
     });
  } else if(req.query.id) { 
      const id = req.query.id;
      Actor.findAll({ where: { id: id }}).then( actor => {
         res.json((actor));
     });
  }else{ 
      const title = req.query.title;
      Actor.findAll({ where: { title: title }}).then( actor => {
         res.json((actor));
     });
  }
});


app.listen(8000, () => {
    console.log("El servidor está inicializado en el puerto 8000");
   });