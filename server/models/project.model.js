const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  status: String,
  github: String,
  category: String,
  leader:  {type: mongoose.Schema.Types.ObjectId, ref: 'Member'},
  members: [{type: mongoose.Schema.Types.ObjectId, ref: 'Member'}]
});

module.exports = mongoose.model('Project', projectSchema);
