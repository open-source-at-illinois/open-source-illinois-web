const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  firstname: String,
  lastname: String,
  email: String,
  github: String,
  picture: String
});

module.exports = mongoose.model('Member', memberSchema);
