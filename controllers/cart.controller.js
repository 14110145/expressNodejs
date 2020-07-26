// const db = require("../db");
const Session = require("../models/session.model.js");

module.exports.addToCart = async (req, res) => {
  let productId = req.params.productId;
  let sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect("/products");
    return;
  }

  // let count = db
  //   .get("sessions")
  //   .find({ id: sessionId })
  //   .get("cart." + productId, 0)
  //   .value();

  // db.get("sessions")
  //   .find({ id: sessionId })
  //   .set("cart." + productId, count + 1)
  //   .write();

  let data = await Session.findOne({ _id: sessionId });
  let count = data.cart[productId] ? data.cart[productId] : 0;

  data.cart[productId] = count + 1;

  await Session.findByIdAndUpdate(sessionId, {
    // cart: { [productId]: count + 1 },
    cart: data.cart
  });
  res.redirect("/products");
};
