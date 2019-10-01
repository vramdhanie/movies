require('dotenv').config();
const express = require('express');

const NODE_ENV = process.env.NODE_ENV;

// create an application
const app = express();

//configure static file
app.use(express.static('client'));

app.post('/movie', express.json(), async (req, res) => {
  const movie = await app.get('db').Movie.create(req.body);
  return res.json(movie);
});

app.get('/movie', async (req, res) => {
  const movies = await app.get('db').Movie.findAll();
  return res.json(movies);
});

//set up error handling
app.use((error, req, res, next) => {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    response = { error };
  }
  res.status(500).json(response);
});

module.exports = app;
