var Member = require('../models/member.model');

module.exports.allMembers = (req, res) => {
  Member.find({}, (err, members) => {
    if(err){
      console.log('Error occured');
    }
    else{
      console.log(members);
      console.log(typeof(members));
      return res.send(members);
    }
  });
};

exports.member = (res, req) => {

};

exports.addMember = (res, req) => {

};

handleError = (err) =>{
  console.log("Got error", err);
}
