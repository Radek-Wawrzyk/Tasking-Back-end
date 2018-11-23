const express = require('express');
const router = express.Router();
const Tasks = require('../models/tasks');

//Tasks

router.get('/tasks', async (req, res) => {
  const tasks = await Tasks.find({});
  res.send(tasks);
});

router.post('/tasks', async (req, res) => {
  const task = await Tasks.create(req.body);
  res.send(task);
});

router.delete('/tasks/:id', async (req, res) => {
  const task = await Tasks.findByIdAndRemove({_id: req.params.id});
  res.send(task);
});

router.put('/tasks/:id', async (req, res) => {
  const task = await Tasks.findByIdAndUpdate({_id: req.params.id}, req.body);
  res.send(task);
});

module.exports = router;