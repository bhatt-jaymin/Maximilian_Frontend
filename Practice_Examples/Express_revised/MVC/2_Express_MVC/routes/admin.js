const path = require("path");
const express = require("express");

const usersController=require('../controllers/users');
const usersMsgController=require('../controllers/users');

const router = express.Router();
//const users = [];
router.get("/create-users",usersController.getAddUser);

router.post("/users",usersMsgController.postAddUserMsg);

module.exports=router;
