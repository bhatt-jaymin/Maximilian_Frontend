const User = require("../models/user");

exports.getHomeUserDisply = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/home", {
      usrs: users,
      pageTitle: "View || User-View",
      path: "/home"
    });
  });
};

exports.getUsersId = (req, res, next) => {
  const userId=req.params.userId;
  User.findById(userId,user=>{
    console.log(user);
  });
  res.redirect('/home');
};

exports.getIndex = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/index", {
      usrs: users,
      pageTitle: "Home || Zenith",
      path: "/",
    });
  });
};

exports.getlogin = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/login", {
      usrs: users,
      pageTitle: "Home || Login",
      path: "/login"
    });
  });
};

exports.getservice = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/service", {
      usrs: users,
      pageTitle: "Home || Service",
      path: "/service"
    });
  });
};

exports.getprice = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/price", {
      usrs: users,
      pageTitle: "Home || Price",
      path: "/price"
    });
  });
};

exports.getcareer = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/career", {
      usrs: users,
      pageTitle: "Home || career",
      path: "/career"
    });
  });
};

exports.getcontact = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/contact", {
      usrs: users,
      pageTitle: "Home || contact Us",
      path: "/contact"
    });
  });
};

exports.getabout = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/about", {
      usrs: users,
      pageTitle: "Home || about Us",
      path: "/about"
    });
  });
};

exports.getregister = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/register", {
      usrs: users,
      pageTitle: "Home || Register",
      path: "/register"
    });
  });
};

exports.shrtlistview = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/shortlist", {
      usrs: users,
      pageTitle: "Home || Short-list",
      path: "/shortlist"
    });
  });
};

exports.scheduleInterviewDisp = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("user-home/interview", {
      usrs: users,
      pageTitle: "Home || Schedule Interview",
      path: "/interview"
    });
  });
};