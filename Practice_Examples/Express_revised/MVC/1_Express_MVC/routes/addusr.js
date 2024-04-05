const path=require('path');
const express = require("express");
const usersHomeController=require('../controllers/users');
const adminData=require('./admin');
const router = express.Router();

  router.get("/", usersHomeController.getHomeUserDisply);

module.exports = router;