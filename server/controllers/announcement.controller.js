const Announcement = require('../models/announcement.model');
const BaseController = require('./base.controller');

class AnnouncementController extends BaseController {
  constructor(name) {
    super(name);
    this.get = this.get.bind(this);
    this.getByCategory = this.getByCategory.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  add(req, res, next) {
    var body = req.body[0];

    var newAnnouncement = new this.model({
      title: body.title,
      content: body.content,
      author: body.author,
      date: Date.now(),
      categories: body.categories,
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
  getByCategory() {

  }
  update() {

  }
  delete() {

  }
}

module.exports = AnnouncementController;
