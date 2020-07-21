const db = require("../db.js");

module.exports.authLogin = (req, res, next) => {
  if (!req.signedCookies.userId) {
    res.render("auth/login");
    return;
  }

  let user = db.get("users").find({ id: req.signedCookies.userId }).value();

  if (!user) {
    res.render("auth/login");
    return;
  }

  res.locals.user = user;
  next();
};
