const Sequelize = require('sequelize');

const sequelize = require('../Sequelize/sequelize');
class Movie extends Sequelize.Model {}

const faker = require('faker');
const times = require("lodash.times");
const random = require("lodash.random");


Movie.init(
    {
        title: { type: Sequelize.STRING },
        author: { type: Sequelize.STRING },
        estreno: { type: Sequelize.BOOLEAN },
        cine: { type: Sequelize.INTEGER }
    },
    {
        sequelize,
        modelName: 'movie'
    }
);
//Movie.belongsTo(Author);
//Author.hasMany(Movie);

Movie.sync({force: true})
    .then( () => {
        Movie.bulkCreate(
            times(15, () => ({            
                title: faker.lorem.sentence(),
                author: faker.name.findName(),
                estreno: "false",
                cine: random( 1, 5)
            }))
            )
        });
        

module.exports = Movie;