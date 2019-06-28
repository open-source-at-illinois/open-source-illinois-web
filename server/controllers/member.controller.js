const Member = require('../models/member.model');
const BaseController = require('./base.controller');

class MemberController extends BaseController{
  constructor(name){
    super(name);
  }
  //Add new member
  add(req, res, next){
    var body = req.body[0];
    var newMember = new Member({    //Try to add a constructor to member.model
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      password: body.password,
      github: body.github
    });
    newMember.save((err) =>{
      if(err){
        console.log('rip bro, you done fucked');
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

module.exports = MemberController
