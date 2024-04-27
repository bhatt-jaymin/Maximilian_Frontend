const path = require("path");
const express = require("express");
const adminController=require('../controllers/useradmin');

const router = express.Router();

router.get("/",adminController.getAdminLogin); 
router.get("/login",adminController.getAdminLogin); 

router.get("/create-users",adminController.getAddUser);

// Admin User View Routes

router.get("/userlist",adminController.getUserListDisplay);
router.post("/users",adminController.postAddUserMsg);
router.get("/viewuser/:userId",adminController.getAdminUsersId);


// Admin Shortlist Routes

router.post("/viewuser/:userId", adminController.postAddToShortlist);
router.get("/shortlist",adminController.getShortListUserListDisplay);
router.get("/shortlist/:userId", adminController.getAdminShortListUsersId); 

module.exports=router;
