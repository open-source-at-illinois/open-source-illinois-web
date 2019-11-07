const express = require('express');
const AnnouncementController = require('../controllers/announcement.controller');
const router = express.Router();


var announcement_controller = new AnnouncementController('announcement');

//Get announcements by type
//router.get('/:type', announcement_controller.all);

//Add announcements
router.post('/add', announcement_controller.add);

module.exports = router;