const express = require('express');
const WorkshopController = require('../controllers/workshop.controller');
const router = express.Router();

var workshop_controller = new WorkshopController('workshop');
router.get('/all', workshop_controller.all);
router.post('/add', workshop_controller.add);
router.get('/suggested/:position', workshop_controller.suggested);
router.put('/updateStatus', workshop_controller.updateStatus);

module.exports = router;
