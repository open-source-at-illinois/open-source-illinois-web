const express = require('express');
const AnnouncementController = require('../controllers/announcement.controller');
const router = express.Router();


var announcement_controller = new AnnouncementController('announcement');

//Get announcements by type
router.get('/all', announcement_controller.all);
router.get('/:category', announcement_controller.byCategory);

//Add announcements
router.post('/add', announcement_controller.add);
router.put('/update/:id', announcement_controller.update);

module.exports = router;