const path=require('path');
const express = require("express");
const usersDisplayController=require('../controllers/users');
const router = express.Router();

  router.get("/", usersDisplayController.getIndex);
  
  router.get("/home",usersDisplayController.getHomeUserDisply);

  router.get("/login",usersDisplayController.getlogin);

  router.get("/service",usersDisplayController.getservice);

  router.get("/price",usersDisplayController.getprice);

  router.get("/career",usersDisplayController.getcareer);

  router.get("/contact",usersDisplayController.getcontact);

  router.get("/about",usersDisplayController.getabout);

  router.get("/register",usersDisplayController.getregister);

  router.get("/shortlist",usersDisplayController.shrtlistview);

  router.get("/scheduleintrw",usersDisplayController.scheduleInterviewDisp);

module.exports = router;