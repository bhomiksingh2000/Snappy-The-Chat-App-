const express = require('express');
// const { default: SetAvatar } = require('../../public/src/pages/SetAvatar');
const router = express.Router()

const { register,login, SetAvatar, getAllUsers }=require('../controllers/userController');
// const { default: SetAvatar } = require('../../public/src/pages/SetAvatar');

router.post("/register",register);
router.post("/login",login);
router.post("/setAvatar/:id",SetAvatar);
router.get("/allusers/:id",getAllUsers);


module.exports=router;
