const express = require('express');
const member_controller = require('../controllers/member.controller');
const router = express.Router();

//Get member routes
router.get('/all', member_controller.allMembers);
router.get('/:name', member_controller.member);

//Add member
router.post('/addMember', member_controller.addMember);

module.exports = router;
