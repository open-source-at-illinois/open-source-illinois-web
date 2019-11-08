const Announcement = require('../models/announcement.model');
const BaseController = require('./base.controller');

class AnnouncementController extends BaseController {
  constructor(name) {
    super(name);
    this.getByType = this.getByType.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  add(req, res, next) {
    var newAnnouncement = new this.model({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      date: Date.now(),
      categories: req.body.categories,
    });

    newAnnouncement.save((err) => {
      if (err) {
        console.log('rip bro you done fucked up');
        res.status(404);
        res.json({
          message: "rip bro you done fucked up",
        });
      }
      else {
        res.status(200);
        res.json({
          message: "save announcement success!",
        });
      }
    })
  }

  getByType(req, res, next) {

  }

  update(req, res, next) {
    let id = req.params.id;

    this.model.findOne({_id: id}, (err, announcement)=>{
      if(err){
        console.log('Error occured');

      } else {
        announcement.title = req.body.title || announcement.title;
        announcement.content = req.body.content || announcement.content;
        announcement.author = req.body.author || announcement.author;
        announcement.date = Date.now();
        announcement.categories = req.body.categories || announcement.categories;

        announcement.save();

        res.status(200);
        res.json({
          message: "nice! you updated an announcement!"
        });
      }
    })
  }
  
  delete(req, res, next) {

  }
}

module.exports = AnnouncementController;
