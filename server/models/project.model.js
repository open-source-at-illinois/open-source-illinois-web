const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: Boolean,
  github: String
});

module.exports = mongoose.model('Project', projectSchema);
