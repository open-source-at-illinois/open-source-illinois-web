const BaseController = require('./base.controller');
const Project = require('../models/project.model');

class ProjectController extends BaseController{
  constructor(name){
    super(name);
  }
  all(req, res, next){
    Project.find({}, (err, projects) => {
      if(err){
        console.log('Error occurred');
      }
      else{
        res.send(projects);
      }
    });
  }
}

module.exports = ProjectController;
