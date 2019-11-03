// Import modules
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.route');
const bodyParser = require('body-parser');
const checkJwt = require('./config/auth');
require('./config/mongodb');  //Sets up database connection

//Set up app

const app = express();
const port = 3000;
// app.set('port', port);


//Set up cross-origin routing -- NOT USED YET
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

//Authenticate api call
app.use(checkJwt);

//Assert connection is working
// app.listen(port, () => {
//   console.log('Server started');
//   console.log('Running on http://localhost:'+port);
// });

  // Define an endpoint that must be called with an access token
//Api
app.use(bodyParser.json());
app.use('/api', routes);

module.exports = app;