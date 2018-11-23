const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongoose');


//Set Express app
const app = express();

//Setup Mongoose DB
mongo.connect('mongodb://localhost/tasking');
mongo.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

//Error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({error: err.message});
});

app.listen(4000, () => {
  console.log("My name is Radek and I'm handsome JS developer");
});