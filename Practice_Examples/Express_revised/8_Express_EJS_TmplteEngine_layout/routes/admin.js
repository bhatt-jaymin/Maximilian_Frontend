const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();
const users = [];
router.get("/create-users", (req, res, next) => {
  console.log("In the Middleware");
  res.render('createuser',{pageTitle:'Add || User',path:'/admin/createuser'});
  /*  res.send(
    '<form action="/admin/users" method="POST"> <center> <input type="text"name="title"><button type="submit">Add New User </button> </center> </form>'
  ); */
});

router.post("/users", (req, res, next) => {
  users.push({ title: req.body.title,desc: req.body.desc,skills:req.body.skills });
  res.send(
    '<script>alert("New User Registered Successfully...!"); window.location="/";</script>'
  );
});

exports.routes = router;
exports.users = users;
