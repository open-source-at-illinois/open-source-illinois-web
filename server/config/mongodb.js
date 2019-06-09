//Initialize db connection
const mongoose = require('mongoose');
//Secure call to password for database
const url = require('./config.js');
mongoose.connect(url.url(), {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to server');
});


module.exports = db;
