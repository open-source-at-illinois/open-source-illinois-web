// const Member = require('../models/member.model');
const BaseController = require('./base.controller');

class MemberController extends BaseController{
  constructor(name){
    super(name);
    this.getMember = this.getMember.bind(this);
  }
  getMember(req, res, next){
    console.log("Getting record of " + req.params.github + " in members");
    var github = req.params.github;
    this.model.findOne({github: github}, (err, member)=>{
      if(err){
        console.log('Error occured');
      }
      else{
        console.log(member);
        return res.send(member);
      }
    })
  }
  //Add new member
  add(req, res, next){
    var body = req.body;
    console.log(body);
    var newMember = new this.model({    //Try to add a constructor to member.model
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      picture: body.picture,
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
