const express = require('express');
const memberRoutes = require('./member.route');
const projectRoutes = require('./project.route');
const workshopRoutes = require('./workshop.route');
const officerRoutes = require('./officer.route');
const router = express.Router();

//connect controller routes
router.use('/member', memberRoutes);
router.use('/project', projectRoutes);
// router.use('/workshop', workshopRoutes);
// router.use('/officer', officerRoutes);

module.exports = router;
