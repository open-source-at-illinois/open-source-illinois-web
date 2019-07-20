const express = require('express');
const ProjectController = require('../controllers/project.controller');
const router = express.Router();

var project_controller = new ProjectController('project');
console.log('reached router');
router.get('/all', project_controller.all);
router.get('/suggested/:position', project_controller.suggested);
router.put('/updateStatus', project_controller.updateStatus);
module.exports = router;
