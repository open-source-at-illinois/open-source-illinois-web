const express = require('express');
const AnnouncementController = require('../controllers/announcement.controller');
const router = express.Router();


var announcement_controller = new AnnouncementController('announcement');

//Get announcment routes
router.get('/all', announcement_controller.all);

//Add announcement
router.post('/add', announcement_controller.add);

router.put('/update/:id', announcement_controller.update);

module.exports = router;
