const express = require('express');

const app = express();

app.use('/api', require('./routes/api'));

app.listen(4000, () => {
  console.log("My name is Radek and I'm handsome JS developer");
});