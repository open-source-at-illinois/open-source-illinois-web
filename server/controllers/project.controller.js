const BaseController = require('./base.controller');

class ProjectController extends BaseController{
  constructor(name){
    super(name);
    this.suggested = this.suggested.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  async all(req, res, next){
    this.model.find({status: "active"}, (err, records) => {
      console.log("Getting all records of " + this.name);
      if(err){
        console.log('Error occured');     //Write error handler
      }
      else{
        return res.send(records);
      }
    });
  }
  async add(req, res, next){
    var body = req.body;
    console.log(body);
    var newProject = new this.model({
      title: body.title,
      description: body.description,
      location: body.description,
      meetup: body.meetup,
      status: body.status,
      github: body.github,
      category: body.category,
      leader: body.leader,
      leaderId: body.leaderId
    });
    newProject.save((err) => {
      if(err){
        console.log(err);
        console.log('rip bro, you done fucked');
      }
    });

    res.sendStatus(200);
  }
  async suggested(req, res, next){
    var position = req.params.position;
    if(position === 'Web Director'){
      var category = 'web development';
    }
    this.model.find({category: category, status: "suggested"}, (err, projects)=>{
      console.log('Getting suggested projects for '+position)
      if(err){
        console.log('Error occured');
      }
      else{
        return res.send(projects);
      }
    })
  }

  async updateStatus(req, res, next){
    //
    var project = req.body;
    var id = project._id;
    var status = project.status;
    var updatingProject = await this.model.findOne({_id: id});
    updatingProject.status = status;
    await updatingProject.save();
  }
}

module.exports = ProjectController;
