const express = require("express");
const shortid = require("shortid");
const db = require("../db.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("users/index.pug", { users: db.get("users").value() });
});

router.get("/search", (req, res) => {
  let q = req.query.q;
  let matchedUser = db
    .get("users")
    .value()
    .filter(function (user, index) {
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
  res.render("users/index.pug", { queryInput: q, users: matchedUser });
});

router.get("/create", (req, res) => {
  res.render("users/create.pug");
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let user = db.get("users").find({ id: id }).value();
  res.render("users/view.pug", { user: user });
});

router.post("/create", (req, res) => {
  req.body.id = shortid.generate();
  db.get("users").push(req.body).write();
  res.redirect("/users");
});

module.exports = router;
