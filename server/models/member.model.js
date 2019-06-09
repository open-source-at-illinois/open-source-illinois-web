const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  github: String
  //Add many-to-many relationship with Projects and teams
});

module.exports = mongoose.model('Member', MemberSchema);
