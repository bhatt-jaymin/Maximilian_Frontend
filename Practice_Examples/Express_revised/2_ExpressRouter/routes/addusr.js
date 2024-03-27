const path=require('path');
const express = require("express");
const rootDir=require('../util/path');
const router = express.Router();

  router.get("/", (req, res, next) => {
    console.log("In the Other Middleware");
    res.sendFile(path.join(rootDir,'views','home.html'));
  });

module.exports = router;