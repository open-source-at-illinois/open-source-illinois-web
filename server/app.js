// Import modules
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.route');
const bodyParser = require('body-parser');
const checkJwt = require('./config/auth');
const environment = require('./config/environment');
require('./config/mongodb');  //Sets up database connection

//Set up app

const app = express();


//Set up cross-origin routing -- NOT USED YET
var corsOptions = {
  origin: environment.frontUrl,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

//Authenticate api call
app.use(checkJwt);

// Define an endpoint that must be called with an access token
//Api
app.use(bodyParser.json());
app.use('/back-end/api', routes);

module.exports = app;