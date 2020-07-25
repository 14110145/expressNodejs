// const db = require("../db.js");
const User = require("../models/user.model");
const shortid = require("shortid");

module.exports.index = (req, res) => {
  User.find().then(function (users) {
    res.render("users/index.pug", {
      users: users,
    });
  });
  // res.render("users/index.pug", {
  //   users: db.get("users").value(),
  // });
};

module.exports.search = (req, res) => {
  // let q = req.query.q;
  // let matchedUser = db
  //   .get("users")
  //   .value()
  //   .filter(function (user, index) {
  //     return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  //   });
  User.find({}).then(function (users) {
    let q = req.query.q;
    let matchedUser = users.filter(function (user, index) {
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render("users/index.pug", { queryInput: q, users: matchedUser });
  });
};

module.exports.get = (req, res) => {
  // let id = req.params.id;
  // let user = db.get("users").find({ id: id }).value();
  // res.render("users/view.pug", { user: user });
  let id = req.params.id;
  User.findOne({ _id: id }).then(function (user) {
    res.render("users/view.pug", { user: user });
  });
};

module.exports.create = (req, res) => {
  res.render("users/create.pug");
};

module.exports.postCreate = (req, res) => {
  // req.body.id = shortid.generate();
  // req.body.avatar = req.file.path.split("\\").join("/");
  // db.get("users").push(req.body).write();
  req.body.avatar = req.file.path.split("\\").join("/");
  User.insertMany(req.body);
  res.redirect("/users");
};
