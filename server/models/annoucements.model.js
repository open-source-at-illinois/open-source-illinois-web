const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: String,
  content: String,
  date: Date,
  author: String,
  category: [String]
});

module.exports = mongoose.model('Announcement', announcementSchema);
