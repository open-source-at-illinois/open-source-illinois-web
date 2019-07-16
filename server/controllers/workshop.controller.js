const BaseController = require('./base.controller');
const mongoose = require('mongoose');
const Officer = require('../models/officer.model');

class WorkshopController extends BaseController{
  constructor(name){
    super(name);
    this.suggested = this.suggested.bind(this);
  }

  suggested(req, res, next){
    var position = req.params.position;
    console.log(position);
    if(position == 'Web Director'){
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

  add(req, res, next){
    console.log('reached');
    var body = req.body[0];
    var ObjectId = mongoose.Schema.ObjectId;
    console.log(ObjectId);
    var newWorkshop = new this.model({
      id : ObjectId,
      title: body.title,
      description: body.description,
      date: body.date,
      presenters: body.presenters
    });
    console.log('reached');
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
}

module.exports = WorkshopController;
