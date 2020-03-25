const Sequelize = require('sequelize');

const sequelize = require('./sequelize');
class Actor extends Sequelize.Model {}

const faker = require('faker');
const times = require("lodash.times");
const random = require("lodash.random");

Actor.init(
    {
        name: { type: Sequelize.STRING },
        apellido: { type: Sequelize.STRING},
        title: { type: Sequelize.STRING }
    },
    {
        sequelize,
        modelName: 'actor'
    }
);
//Movie.belongsTo(Author);
//Author.hasMany(Movie);

Actor.sync({force: true})
    .then( () => {
        Actor.bulkCreate(
            times(30, () => ({            
                title: faker.lorem.sentence(),
                apellido: faker.name.lastName(),
                name: faker.name.firstName()
            }))
            )
        });
        

module.exports = Actor;