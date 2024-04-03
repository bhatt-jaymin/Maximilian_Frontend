const path=require('path');
const express = require("express");
const rootDir=require('../util/path');
const adminData=require('./admin');
const router = express.Router();

  router.get("/", (req, res, next) => {
    const users=adminData.users;
    res.render('home',{usrs:users,pageTitle:'Home',path:'/',hasUsers:users.length>0,homeCSS:true,activeHome:true});
/*     console.log('Addusr :',adminData.students);
    res.sendFile(path.join(rootDir,'views','home.html')); */
  });

module.exports = router;