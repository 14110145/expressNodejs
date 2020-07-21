const db = require("../db.js");
const md5 = require("md5");

module.exports.login = (req, res) => {
  res.render("auth/login.pug");
};

module.exports.postLogin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let md5Password = md5(password);

  let user = db.get("users").find({ email: email }).value();
  if (!user) {
    res.render("auth/login.pug", {
      errors: ["User does not exist!!!"],
      values: req.body,
    });
    return;
  }

  if (user.password !== md5Password) {
    res.render("auth/login.pug", {
      errors: ["Password is not correct!!!"],
      values: req.body,
    });
    return;
  }

  res.cookie("userId", user.id, {
    signed: true,
  });
  res.redirect("/users");
};
