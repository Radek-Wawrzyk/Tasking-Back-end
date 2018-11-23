const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  subTasks: []
});

const Tasks = mongoose.model('tasks', TasksSchema);
module.exports = Tasks;