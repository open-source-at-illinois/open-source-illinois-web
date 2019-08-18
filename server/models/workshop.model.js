const mongoose = require('mongoose');
const Officer = require('./officer.model');

var ObjectId = mongoose.Schema.ObjectId;
var workshopSchema = new mongoose.Schema({
  id : ObjectId,
  title: String,
  description: String,
  date: Date,
  location: String,
  status: String,
  category: String,
  presenter: {type: mongoose.Schema.ObjectId, ref: 'Officer'},
  attending: [{type: mongoose.Schema.ObjectId, ref: 'Member'}]
});

module.exports = mongoose.model('Workshop', workshopSchema);
