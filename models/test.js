const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Test = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Test2 = mongoose.model('test', Test);
module.exports = Test2;