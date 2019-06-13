const express = require('express');
const memberRoutes = require('./member.route');
const projectRoutes = require('./project.route');
const router = express.Router();

//connect controller routes
router.use('/member', memberRoutes);
router.use('/project', projectRoutes);
module.exports = router;
