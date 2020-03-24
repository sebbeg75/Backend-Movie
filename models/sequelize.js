const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
});

sequelize.authenticate()
    .then( () => console.log('Connection has been established succesfully'))
    .catch(err => console.error('Unable to conect to the database:',err));

module.exports = sequelize;    