const express = require('express');
const OfficerController = require('../controllers/officer.controller');
const router = express.Router();

var officer_controller = new OfficerController('officer');
router.get('/all', officer_controller.all);
router.get('/:name', officer_controller.getone);
router.post('/add', officer_controller.add);
module.exports = router;
