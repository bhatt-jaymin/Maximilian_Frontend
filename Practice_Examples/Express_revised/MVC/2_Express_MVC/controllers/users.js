const User = require("../models/user");

exports.getAddUser = (req, res, next) => {
  res.render("createuser", {
    pageTitle: "User || Add User",
    path: "/admin/createuser",
    newuserstyleCSS: true,
    activeNewUsr: true,
  });
};

exports.postAddUserMsg = (req, res, next) => {
  const user = new User(
    req.body.title,
    req.body.desc,
    req.body.skills,
    req.body.imageURL,
    req.body.state,
    req.body.city,
    req.body.addrss,
    req.body.phone,
    req.body.gender,
    req.body.usrtype,
    req.body.acttype
  );
  user.save();
  res.send(
    '<script>alert("New User Registered Successfully...!"); window.location="/";</script>'
  );
};

exports.getHomeUserDisply = (req, res, next) => {
  User.fetchAll(users => {
    res.render("home", {
      usrs: users,
      pageTitle: "Home || Dashboard",
      path: "/",
      hasUsers: users.length > 0,
      homeCSS: true,
      activeHome: true,
    });
  });
};