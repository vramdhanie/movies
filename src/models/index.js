const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST
  }
);

const models = {
  Movie: sequelize.import('./movie')
};

module.exports = { sequelize, models };
