const express = require('express');
const router = express.Router();
const Test = require('../models/test');

router.get('/status', (req, res) => {
  res.send({message: 'It works and I like it'});
  console.log(req.body);
});

router.post('/status', (req, res) => {
  res.send({message: 'It works and I like it'});

  Test.create(req.body).then(test => {
    res.send(test);
  });
});

module.exports = router;