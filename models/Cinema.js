const Sequelize = require('sequelize');

const sequelize = require('./sequelize');
class Cinema extends Sequelize.Model {}

const faker = require('faker');
const times = require("lodash.times");
const random = require("lodash.random");

Cinema.init(
    {
        name: { type: Sequelize.STRING },
        estreno: { type: Sequelize.BOOLEAN },
        provincia: { type: Sequelize.STRING },
        title: { type: Sequelize.STRING }
    },
    {
        sequelize,
        modelName: 'cinema'
    }
);
//Movie.belongsTo(Author);
//Author.hasMany(Movie);

Cinema.sync({force: true})
    .then( () => {
        Cinema.bulkCreate(
            times(5, () => ({            
                title: faker.lorem.sentence(),
                provincia: faker.name.firstName(),
                estreno: "false",
                name: faker.lorem.sentence()
            }))
            )
        });
        

module.exports = Cinema;