const express = require('express');
const ProjectController = require('../controllers/project.controller');
const router = express.Router();

var project_controller = new ProjectController('project');
router.get('/all', project_controller.all);
router.get('/pending/:position', project_controller.pending);
router.put('/updateStatus', project_controller.updateStatus);
module.exports = router;
