const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.send({message: 'It works and I like it'});
});

module.exports = router;