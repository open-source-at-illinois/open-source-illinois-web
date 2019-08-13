const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  location: String,
  meetup: String,
  status: String,
  github: String,
  category: String,
  leader: String,
  leaderId:  {type: mongoose.Schema.Types.ObjectId, ref: 'Member'},
  members: [{type: mongoose.Schema.Types.ObjectId, ref: 'Member'}],
  pendingMembers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Member'}]
});

module.exports = mongoose.model('Project', projectSchema);
