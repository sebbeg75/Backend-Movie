const sequelize = require('./sequelize');
const { Model,
        STRING,
        TEXT 
} = require('sequelize');

class Cinema extends Model {}

Cinema.init(
    {
        title: { type: STRING },
        content: { type: TEXT },
    },
    {
        sequelize,
        modelName: 'Cinema'
    }
);

Cinema.sync({force: true})
    .then( () => {
        Cinema.create(
            times(10, () => ({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName()
            }))
        )
    });

module.exports = Cinema;