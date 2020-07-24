const db = require("../db.js");
const shortId = require("shortId");

module.exports.create = (req, res, next) => {
  console.log("csruf: " + req.csrfToken());
  res.render("transfer/index.pug", { csrfToken: req.csrfToken() });
};

module.exports.postCreate = (req, res, next) => {
  let data = {
    id: shortId.generate(),
    amount: parseInt(req.body.amount),
    accountId: req.body.accountId,
    userId: req.signedCookies.userId,
  };
  db.get("transfer").push(data).write();
  res.redirect("/transfer/create");
};
