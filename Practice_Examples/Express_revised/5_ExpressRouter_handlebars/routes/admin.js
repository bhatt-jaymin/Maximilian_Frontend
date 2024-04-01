const path=require('path');
const express = require("express");
const rootDir=require('../util/path');
const router = express.Router();

router.get("/create-users", (req, res, next) => {
  console.log("In the Middleware");
  res.sendFile(path.join(rootDir,'views','createuser.html'));
 /*  res.send(
    '<form action="/admin/users" method="POST"> <center> <input type="text"name="title"><button type="submit">Add New User </button> </center> </form>'
  ); */
});

router.post("/users", (req, res, next) => {
  console.log(req.body);
  res.send(
    '<script>alert("New User Registered Successfully...!"); window.location="/";</script>'
  );
});

module.exports = router;
