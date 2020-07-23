const db = require("../db");
module.exports.addToCart = (req, res) => {
  let productId = req.params.productId;
  let sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect("/products");
    return;
  }

  let count = db
    .get("sessions")
    .find({ id: sessionId })
    .get("cart." + productId, 0)
    .value();

  db.get("sessions")
    .find({ id: sessionId })
    .set("cart." + productId, count + 1)
    .write();

  let data = db.get("sessions").find({ id: sessionId }).value();

  let total = Object.values(data.cart).reduce((prev, curr) => prev + curr, 0);

  res.locals.total = total;

  res.redirect("/products");
};
