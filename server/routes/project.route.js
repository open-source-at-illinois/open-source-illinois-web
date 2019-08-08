const express = require('express');
const ProjectController = require('../controllers/project.controller');
const router = express.Router();

var project_controller = new ProjectController('project');
router.get('/all', project_controller.all);
router.get('/suggested/:position', project_controller.suggested);
router.put('/updateStatus', project_controller.updateStatus);
router.post('/add', project_controller.add);
module.exports = router;
