const express = require('express');
const project_controller = require('../controllers/project.controller');
const router = express.Router();

router.get('/all', project_controller.allProjects);

module.exports = router;
