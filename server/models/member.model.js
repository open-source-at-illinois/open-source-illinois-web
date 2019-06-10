const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  github: String
  //Add many-to-many relationship with Projects and teams
});

module.exports = mongoose.model('Member', memberSchema);
