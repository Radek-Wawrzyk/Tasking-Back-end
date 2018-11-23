const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongoose');


//Set Express app
const app = express();

//Setup MongoDB
mongo.connect('mongodb://localhost/tasking');
mongo.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.listen(4000, () => {
  console.log("My name is Radek and I'm handsome JS developer");
});