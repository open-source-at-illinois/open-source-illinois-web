const express = require('express');
const member_controller = require('../controllers/member.controller');
const router = express.Router();

router.get('/all', member_controller.allMembers);

router.get('/:id', member_controller.member);







module.exports = router;
