//Initialize db connection
const mongoose = require('mongoose');
const environment = require('./environment');

//Secure call to password for database
const url = require('./config.js');

//Connect to database and make sure it works
if(environment.production){
  mongoose.connect(url.prodUrl(), {useNewUrlParser: true});
  console.log('prod url');
}
else{
  mongoose.connect(url.testUrl(), {useNewUrlParser: true});
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to server');
});


module.exports = db;
