const mongoose = require('mongoose');
const Member = require('./member.model');
const workshop = require('./workshop.model');
//Needs more work
var ObjectId = mongoose.Schema.ObjectId;
// var member = new MemberSchema;
// console.log(member);
const officerModel = Member.discriminator('Officer',
  new mongoose.Schema({
    id: ObjectId,
    position: String,
  })
);
module.exports = officerModel;
// module.exports = mongoose.model('Officer', officerSchema);
