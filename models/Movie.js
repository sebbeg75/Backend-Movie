const sequelize = require('./sequelize');
const { Model,
        STRING,
        TEXT 
} = require('sequelize');

class Movie extends Model {}

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
                content: faker.lorem.paragraph(),
                authorId: random(1, 10)
            }))
        )
    });



module.exports = Movie;