const express = require('express');
const MemberController = require('../controllers/member.controller');
const router = express.Router();

var member_controller = new MemberController('member');
//Get member routes
router.get('/all', member_controller.all);
router.get('/:name', member_controller.getone); //Add some password authentication

//Add member
router.post('/addMember', member_controller.add);

module.exports = router;
