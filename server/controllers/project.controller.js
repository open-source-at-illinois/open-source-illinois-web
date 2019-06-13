var Project = require('../models/project.model');

//Get all projects
exports.allProjects = (req, res) => {
  Project.find({}, (err, projects) => {
    if(err){
      console.log('Error occurred');
    }
    else{
      res.send(projects);
    }
  });
};
