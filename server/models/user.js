const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/digitalSkola');

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  hobby: String,
});

module.exports = mongoose.model('user',schema);