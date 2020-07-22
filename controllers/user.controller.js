const db = require("../db.js");
const shortid = require("shortid");

module.exports.index = (req, res) => {
  res.render("users/index.pug", { users: db.get("users").value() });
};

module.exports.search = (req, res) => {
  let q = req.query.q;
  let matchedUser = db
    .get("users")
    .value()
    .filter(function (user, index) {
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
  res.render("users/index.pug", { queryInput: q, users: matchedUser });
};

module.exports.get = (req, res) => {
  let id = req.params.id;
  let user = db.get("users").find({ id: id }).value();
  res.render("users/view.pug", { user: user });
};

module.exports.create = (req, res) => {
  res.render("users/create.pug");
};

module.exports.postCreate = (req, res) => {
  req.body.id = shortid.generate();
  req.body.avatar = req.file.path.split("\\").join("/");
  db.get("users").push(req.body).write();
  res.redirect("/users");
};
