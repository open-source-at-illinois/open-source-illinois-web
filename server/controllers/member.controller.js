const Member = require('../models/member.model');
const BaseController = require('./base.controller');

class MemberController extends BaseController{
  constructor(name){
    super(name);
  }
  //Get all members
  all(req, res, next){
    Member.find({}, (err, members) => {
      if(err){
        console.log('Error occured');     //Write error handler
      }
      else{
        return res.send(members);
      }
    });
  }
  //Get specific member
  getone(req, res, next){
    console.log(req.params.name)
    var name = req.params.name;
    Member.find({firstname: name}, (err, member)=>{
      if(err){
        console.log('Error occured');
      }
      else{
        return res.send(member);
      }
    })
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
//Get all members
// exports.allMembers = (req, res) => {
//   Member.find({}, (err, members) => {
//     if(err){
//       console.log('Error occured');     //Write error handler
//     }
//     else{
//       return res.send(members);
//     }
//   });
// };

//Get specific member
// exports.member = (req, res) => {
//   console.log(req.params.name)
//   var name = req.params.name;
//   Member.find({name: 'Thomas'}, (err, member)=>{
//     if(err){
//       console.log('Error occured');
//     }
//     else{
//       return res.send(member);
//     }
//   })
// };

//Add new member
// exports.addMember = (req, res) => {
//   var body = req.body[0];
//   var newMember = new Member({    //Try to add a constructor to member.model
//     firstname: body.firstname,
//     lastname: body.lastname,
//     email: body.email,
//     password: body.password,
//     github: body.github
//   });
//   newMember.save((err) =>{
//     if(err){
//       console.log('rip bro, you done fucked');
//     }
//     else{
//       res.status(200);
//       res.json({
//         message: body.firstname + " "+ body.lastname + ' successfully registered'
//       });
//     }
//   })
// };

module.exports = MemberController
