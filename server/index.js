// Import modules
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.route');
const bodyParser = require('body-parser');
//Authentication modules
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
require('./config/mongodb');  //Sets up database connection

//Set up app
const app = express();
const port = 3000;
app.set('port', port);


//Set up cross-origin routing -- NOT USED YET
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// var jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: 'https://dev-3mntwbjz.auth0.com/.well-known/jwks.json'
// }),
// audience: 'http://localhost:3000/',
// issuer: 'https://dev-3mntwbjz.auth0.com/',
// algorithms: ['RS256']
// });

// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
// res.send('Secured Resource');
// });

//Assert connection is working
app.listen(port, () => {
  console.log('Server started');
  console.log('Running on http://localhost:'+port);
});
//Api
app.use(bodyParser.json());
app.use('/api', routes);
