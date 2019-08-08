const express = require('express');
const MemberController = require('../controllers/member.controller');
const router = express.Router();


var member_controller = new MemberController('member');

//Get member routes
router.get('/all', member_controller.all);
router.get('/github/:github', member_controller.getMember);
router.get('/name/:firstname/:lastname', member_controller.getone); 

//Add member
router.post('/add', member_controller.add);

module.exports = router;
