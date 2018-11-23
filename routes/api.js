const express = require('express');
const router = express.Router();
const Tasks = require('../models/tasks');

//Tasks

router.get('/tasks', async (req, res, next) => {
  try {
    const tasks = await Tasks.find({});
    res.send(tasks);
  } catch (err) {
    next(err);
  }
});

router.post('/tasks', async (req, res, next) => {
  try {
    const task = await Tasks.create(req.body);
    res.send(task);
  } catch (err) {
    next(err);
  }
});

router.delete('/tasks/:id', async (req, res, next) => {
  try {
    const task = await Tasks.findByIdAndRemove({_id: req.params.id});
    res.send(task);
  } catch (err) {
    next(err);
  }
});

router.put('/tasks/:id', async (req, res, next) => {
  try {
    const task = await Tasks.findByIdAndUpdate({_id: req.params.id}, req.body);
    res.send(task);
  } catch (err) {
    next(err);
  }
});

module.exports = router;