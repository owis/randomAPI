
require('dotenv').config();

const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const randomFloat = require('./useCases/randomFloat.js');


app.use(morgan(`:method :url port=${PORT} :status :res[content-length] - :response-time ms`));

app.get('/api/v1/number', (req, res) => {
  const value = randomFloat.randomFloat();
  res.json({value});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
