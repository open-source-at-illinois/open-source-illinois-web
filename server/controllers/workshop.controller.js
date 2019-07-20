const BaseController = require('./base.controller');
const mongoose = require('mongoose');
const Officer = require('../models/officer.model');

class WorkshopController extends BaseController{
  constructor(name){
    super(name);
    this.suggested = this.suggested.bind(this);
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

  suggested(req, res, next){
    var position = req.params.position;
    if(position == 'Web Director'){
      var category = 'web development';
    }
    this.model.find({category: category, status: "suggested"}, (err, projects)=>{
      console.log('Getting suggested workshops for '+position)
      if(err){
        console.log('Error occured');
      }
      else{
        return res.send(projects);
      }
    })
  }

  add(req, res, next){
    var body = req.body[0];
    var ObjectId = mongoose.Schema.ObjectId;
    console.log(ObjectId);
    var newWorkshop = new this.model({
      id : ObjectId,
      title: body.title,
      description: body.description,
      date: body.date,
      location: body.location,
      status: body.status,
      category: body.category,
      presenter: body.presenter
    });
    newWorkshop.save((err) =>{
      if(err){
        console.log('rip bro, you done fucked');
      }
      else{
        res.send(200);
        res.json({
          message: body.title + " succesfully entered"
        });
      }
    })
  }

  async updateStatus(req, res, next){
    //
    var workshop = req.body;
    var id = workshop._id;
    var status = workshop.status;
    var updatingWorkshop = await this.model.findOne({_id: id});
    updatingWorkshop.status = status;
    await updatingWorkshop.save();
  }
}


module.exports = WorkshopController;
