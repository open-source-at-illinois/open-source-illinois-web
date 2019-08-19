const BaseController = require('./base.controller');

class ProjectController extends BaseController{
  constructor(name){
    super(name);
    this.suggested = this.suggested.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.addProjectMember = this.addProjectMember.bind(this);
    this.byUser = this.byUser.bind(this);
    this.approveProjectMember = this.approveProjectMember.bind(this);
    this.rejectProjectMember = this.rejectProjectMember.bind(this);
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

  async byUser(req, res, next){
    var id = req.params.id;
    this.model.find({leaderId: id}, (err, projects) => {
      console.log('Getting projects led by '+id)
      if(err){
        console.log('rip broski, you done fucked up');
      }
      else{
        res.send(projects);
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

  async addProjectMember(req, res, next){
    var userId = req.body[0];
    var projectId = req.body[1];
    await this.model.updateOne(
      {_id: projectId},
      {$push: {pendingMembers: userId}}
    );
    res.sendStatus(200);
  }

  async approveProjectMember(req, res, next){
    var userId = req.body[0];
    var projectId = req.body[1];
    var project = await this.model.findOne({_id: projectId});
    var index = project.pendingMembers.indexOf(userId);
    var hold = project.pendingMembers[index];
    project.pendingMembers.splice(index, 1);
    project.members.push(hold);
    await project.save();
  }

  async rejectProjectMember(req, res, next){
    var userId = req.params.userId;
    var projectId = req.params.projectId;

    console.log('this projectId is '+projectId+ ' and this userId is '+userId);
    var project = await this.model.findOne({_id: projectId});
    var index = project.pendingMembers.indexOf(userId);
    project.pendingMembers.splice(index, 1);
    await project.save();

    res.sendStatus(200);

  }
}

module.exports = ProjectController;
