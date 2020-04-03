//Initialize db connection
const mongoose = require('mongoose');
const environment = require('./environment');

mongoose.connect(environment.mongo_uri, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to server');
});


module.exports = db;
