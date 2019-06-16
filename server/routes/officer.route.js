const express = require('express');
const officer_controller = require('../controllers/officer.controller');
const router = express.Router();

router.get('/all', officer_controller.allOfficers);

module.exports = router;
