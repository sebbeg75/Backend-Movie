const sequelize = require('./sequelize');
const { Model,
        STRING,
        TEXT 
} = require('sequelize');

class Actor extends Model {}

Actor.init(
    {
        title: { type: STRING },
        content: { type: TEXT },
    },
    {
        sequelize,
        modelName: 'Actor'
    }
);

Actor.sync({force: true})
    .then( () => {
        Actor.create(
            times(10, () => ({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName()
            }))
        )
    });

module.exports = Actor;