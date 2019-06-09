// Import modules
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.route');
require('./config/mongodb');

//Set up app
const app = express();
const port = 3000;
app.set('port', port);
//
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

//Api calls
app.listen(port, () => {
  console.log('Server started');
  console.log('Running on http://localhost:'+port);
});

app.use('/api', routes);
