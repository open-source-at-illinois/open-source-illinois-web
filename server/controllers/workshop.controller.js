const BaseController = require('./base.controller');
const mongoose = require('mongoose');
const Officer = require('../models/officer.model');

class WorkshopController extends BaseController{
  constructor(name){
    super(name);
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
