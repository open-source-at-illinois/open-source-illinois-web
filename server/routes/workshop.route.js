const express = require('express');
const workshop_controller = require('../controllers/workshop.controller');
const router = express.Router();

router.get('/all', workshop_controller.allWorkshops);

module.exports = router;
