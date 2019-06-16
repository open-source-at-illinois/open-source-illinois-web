const mongoose = require('mongoose');
const member = require('./member.model');
const workshop = require('./workshop.model');
//Needs more work
// const officerSchema = member.discriminator('Officer',
//   new mongoose.Schema({
//     position: String,
//     workshops: [{type: mongoose.Schema.Types.ObjectId, ref: 'Workshop'}]
//   })
// );
//
// module.exports = mongoose.model('Officer', officerSchema);
