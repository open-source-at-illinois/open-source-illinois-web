const express = require('express');
const AnnouncementController = require('../controllers/announcement.controller');
const router = express.Router();


var announcement_controller = new AnnouncementController('announcement');

//Get announcment routes

//Add announcement
router.post('/add', announcement_controller.add);

module.exports = router;
