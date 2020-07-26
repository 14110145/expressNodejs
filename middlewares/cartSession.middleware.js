// const db = require("../db");
const Session = require("../models/session.model.js");

module.exports = async (req, res, next) => {
  let total;
  let sessionId = req.signedCookies.sessionId;
  if (sessionId) {
    let data = await Session.findById({ _id: sessionId });
    total = Object.values(data.cart).reduce((prev, curr) => prev + curr, 0);
    res.locals.total = total;
  }
  // let data = db.get("sessions").find({ id: sessionId }).value();
  // if (data.cart) {
  //   total = Object.values(data.cart).reduce((prev, curr) => prev + curr, 0);
  //   res.locals.total = total;
  // }

  next();
};
