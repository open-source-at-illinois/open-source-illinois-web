var Workshop = require('../models/workshop.model');

exports.allWorkshops = (req, res) => {
  Workshop.find({}, (err, workshops) => {
    if(err){
      console.log('Error occurred');
    }
    else{
      res.send(workshops);
    }
  });
};
