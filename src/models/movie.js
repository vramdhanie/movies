const movie = (sequelize, DataTypes) => {
  const Movie = sequelize.define('movie', {
    title: {
      type: DataTypes.STRING
    },
    release_year: {
      type: DataTypes.INTEGER
    }
  });
  return Movie;
};

module.exports = movie;
