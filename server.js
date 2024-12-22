const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDb = require('./config/dataBase.js');

dotenv.config({ path: './.env' });

connectDb(); 

app.get('/', (req, res) => {
  res.send('Hello brother');
});

app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`Server is Running on Port ${process.env.PORT}`);
});