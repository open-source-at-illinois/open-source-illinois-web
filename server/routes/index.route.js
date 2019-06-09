const express = require('express');
const memberRoutes = require('./member.route');

const router = express.Router();

//connect controller routes
router.use('/member', memberRoutes);

module.exports = router;
