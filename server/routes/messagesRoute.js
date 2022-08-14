const express = require('express');
// const { default: SetAvatar } = require('../../public/src/pages/SetAvatar');
const router = express.Router()

const { getAllMessage, addMessage }=require('../controllers/messagesController');
// const { default: SetAvatar } = require('../../public/src/pages/SetAvatar');

router.post("/addmsg/",addMessage);
router.post("/getmsg/",getAllMessage);


module.exports=router;
