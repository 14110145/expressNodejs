// const db = require("../db.js");
// const shortId = require("shortId");
const Session = require("../models/session.model");

module.exports.create = (req, res, next) => {
  res.render("transfer/index.pug", { csrfToken: req.csrfToken() });
};

module.exports.postCreate = (req, res, next) => {
  let data = {
    // id: shortId.generate(),
    amount: parseInt(req.body.amount),
    accountId: req.body.accountId,
    userId: req.signedCookies.userId,
  };
  // db.get("transfer").push(data).write();
  Session.insertMany(data);
  res.redirect("/transfer/create");
};
