const BaseController = require('./base.controller');

class ProjectController extends BaseController{
  constructor(name){
    super(name);
    this.pending = this.pending.bind(this);
  }

  pending(req, res, next){
    var position = req.params.position;
    console.log(position);
    if(position == 'Web Director'){
      var category = 'web development';
    }
    this.model.find({category: category, status: "pending"}, (err, projects)=>{
      console.log('Getting pending projects for '+position)
      if(err){
        console.log('Error occured');
      }
      else{
        return res.send(projects);
      }
    })
  }

  updateStatus(req, res, next){
    var project = req.body[0];
    var id = project.id;
    var status = project.status;
    console.log('reached');
    this.model.update({_id: id}, {status: status});
    console.log('reached 2');
  }
}

module.exports = ProjectController;
