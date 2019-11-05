const BaseController = require('./base.controller');
const mongoose = require('mongoose');

class Announcement extends BaseController {
  constructor(name) {
    super(name);
  }
  add(req, res, next) {
    var body = req.body[0];
    // var ObjectId = mongoose.Schema.ObjectId;
    var newAnnouncement = new this.model({
      // id: ObjectId,
      title: body.title,
      content: body.content,
      date: body.date,
      author: body.author,
      category: body.category,
    });
    newAnnouncement.save((err) => {
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