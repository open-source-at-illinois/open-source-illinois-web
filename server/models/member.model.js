const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  github: String
});

module.exports = mongoose.model('Member', memberSchema);
