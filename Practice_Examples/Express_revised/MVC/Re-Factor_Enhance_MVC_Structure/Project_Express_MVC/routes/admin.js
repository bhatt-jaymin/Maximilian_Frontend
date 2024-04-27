const path = require("path");
const express = require("express");
const adminController=require('../controllers/useradmin');
//const adminUsersMsgController=require('../controllers/useradmin');

const router = express.Router();
//const users = [];
router.get("/create-users",adminController.getAddUser);

router.get("/userlist",adminController.getUserListDisplay);

router.post("/users",adminController.postAddUserMsg);

module.exports=router;
