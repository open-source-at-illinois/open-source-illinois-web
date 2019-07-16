const mongoose = require('mongoose');
const Officer = require('./officer.model');

var ObjectId = mongoose.Schema.ObjectId;
var workshopSchema = new mongoose.Schema({
  id : ObjectId,
  title: String,
  description: String,
  date: Date,
  status: String,
  presenters: [{type: mongoose.Schema.ObjectId, ref: 'Officer'}]
});

module.exports = mongoose.model('Workshop', workshopSchema);
