const User = require("../models/user.model");

// const db = require("../db.js");
module.exports.authLogin = async (req, res, next) => {
  if (!req.signedCookies.userId) {
    res.render("auth/login");
    return;
  }
  // let user = db.get("users").find({ id: req.signedCookies.userId }).value();
  await User.findOne({ _id: req.signedCookies.userId }).then(function (user) {
    if (!user) {
      res.render("auth/login");
      return;
    }
    res.locals.user = user;
  });
  next();
};
