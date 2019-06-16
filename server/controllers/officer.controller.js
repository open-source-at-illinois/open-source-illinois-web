var Officer = require('../models/officer.model');

exports.allOfficers = (req, res) => {
  Officer.find({}, (err, officers) => {
    if(err){
      console.log('Error occurred');
    }
    else{
      res.send(officers);
    }
  });
};
