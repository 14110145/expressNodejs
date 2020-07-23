const db = require("../db");
module.exports = (req, res, next) => {
  let total;
  let sessionId = req.signedCookies.sessionId;
  let data = db.get("sessions").find({ id: sessionId }).value();
  if (data.cart) {
    total = Object.values(data.cart).reduce((prev, curr) => prev + curr, 0);
    res.locals.total = total;
  }

  next();
};
