// Import the User model
const User = require("../models/user");

// Your controller functions
exports.getAddUser = (req, res, next) => {
  res.render("admin/createuser", {
    pageTitle: "Admin || Add User",
    path: "/admin/createuser",
    newuserstyleCSS: true,
    activeNewUsr: true,
  });
};

exports.postAddUserMsg = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const desc = req.body.desc;
  const skills = req.body.skills;
  const state = req.body.state;
  const city = req.body.city;
  const addrss = req.body.addrss;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const actype = req.body.actype;
  const user = new User(title, imageURL, desc, skills,gender);
  user.save();
  res.send(
    '<script>alert("New User Registered Successfully...!"); window.location="/";</script>'
  );
};

exports.getUserListDisplay = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("admin/userlist", {
      usrs: users,
      pageTitle: "Admin || User View",
      path: "/admin/userlist",
    });
  });
};
