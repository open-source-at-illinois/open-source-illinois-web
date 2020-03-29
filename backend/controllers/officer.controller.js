const BaseController = require('./base.controller');
const mongoose = require('mongoose');

class OfficerController extends BaseController{
  constructor(name){
    super(name);
  }
  add(req, res, next){
    var body = req.body[0];
    // var ObjectId = mongoose.Schema.ObjectId;
    var newOfficer = new this.model({
      // id: ObjectId,
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      picture: body.picture,
      github: body.github,
      position: body.position,
    });
    newOfficer.save((err) => {
      if(err){
        console.log('rip bro you done fucked up');
      }
      else{
        res.status(200);
        res.json({
          message: body.firstname + " "+ body.lastname + ' successfully registered'
        });
      }
    })
  }
}

module.exports = OfficerController;
