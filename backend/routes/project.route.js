const express = require('express');
const ProjectController = require('../controllers/project.controller');
const router = express.Router();

var project_controller = new ProjectController('project');
router.get('/all', project_controller.all);
router.get('/suggested/:position', project_controller.suggested);
router.get('/byUser/:id', project_controller.byUser);
router.put('/updateStatus', project_controller.updateStatus);
router.put('/addProjectMember', project_controller.addProjectMember);
router.put('/approveProjectMember', project_controller.approveProjectMember);
router.delete('/rejectProjectMember/:projectId/:userId', project_controller.rejectProjectMember);
router.post('/add', project_controller.add);
module.exports = router;
