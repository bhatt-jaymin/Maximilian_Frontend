// Import the User model
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "shortlist.json"
);
const User = require("../models/user");
const ShortlistUser = require("../models/shortlistUser");

// Your controller functions

exports.getAdminLogin = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("admin/adminlogin", {
      usrs: users,
      pageTitle: "Admin || Login",
      path: "/admin/adminlogin"
    });
  });
};

// Admin User View Controllers

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
  const usrtype = req.body.usrtype;
  const actype = req.body.actype;
  const user = new User(
    title,
    imageURL,
    desc,
    skills,
    state,
    city,
    addrss,
    phone,
    gender,
    usrtype,
    actype
  );
  user.save();
  res.send(
    '<script>alert("New User Registered Successfully...!"); window.location="/admin/userlist";</script>'
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

exports.getAdminUsersId = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId, (user) => {
    ShortlistUser.findById(userId, (shortlistUser) => {
      const userInShortlist = shortlistUser !== null;
      res.render("admin/viewuser", {
        user: user,
        userInShortlist: userInShortlist,
        pageTitle: "User Profile || " + user.title,
        path: "/admin/viewuser",
      });
    });
  });
};


// Admin Shortlist controllers

exports.postAddToShortlist = (req, res, next) => {
  const userId = req.params.userId; // Assuming you send the user ID along with the request
  User.findById(userId, (user) => {
    if (!user) {
      return res.status(404).send("User not found");
    }
    const shortlistUser = new ShortlistUser(userId, user.title, user.imageURL, user.desc, user.skills, user.state, user.city, user.addrss, user.phone, user.gender, user.usrtype, user.actype);
    shortlistUser.save();
    res.send('<script>alert("User successfully added to shortlist."); window.location="/admin/shortlist";</script>');
  });
}; 



exports.getShortListUserListDisplay = (req, res, next) => {
  ShortlistUser.fetchAll((shortlist) => {
    res.render("admin/shortlist", {
      shortlist: shortlist,
      pageTitle: "Admin || ShortList User List",
      path: "/admin/shortlist",
      newuserstyleCSS: true,
      activeNewUsr: true,
    });
  });
};


exports.getAdminShortListUsersId = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId, (user) => {
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Log the user object to inspect its structure
    console.log("item:", user);
    res.render("admin/shortlistviewuser", {
      item: user,
      pageTitle: user.title + " ShortList User Profile",
      path: "/admin/shortlist",
    });
  });
};