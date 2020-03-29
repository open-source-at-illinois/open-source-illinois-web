const express = require('express');
const WorkshopController = require('../controllers/workshop.controller');
const router = express.Router();

var workshop_controller = new WorkshopController('workshop');
router.get('/all', workshop_controller.all);
router.get('/suggested/:position', workshop_controller.suggested);
router.get('/byUser/:id', workshop_controller.byUser);
router.post('/add', workshop_controller.add);
router.put('/updateStatus', workshop_controller.updateStatus);
router.put('/addAttendee', workshop_controller.addAttendee);

module.exports = router;
