const app = require('./app');
const { models, sequelize } = require('./models');
const PORT = process.env.PORT;

sequelize.sync().then(() => {
  app.set('db', models);
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
