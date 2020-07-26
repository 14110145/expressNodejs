// let shortId = require("shortid");
// const db = require("../db");
const Session = require("../models/session.model.js");

module.exports = async (req, res, next) => {
  if (!req.signedCookies.sessionId) {
    // let sessionId = shortId.generate();
    // res.cookie("sessionId", sessionId, {
    //   signed: true,
    // });
    // db.get("sessions").push({ id: sessionId, cart: {} }).write();

    let data = await Session.insertMany();
    let id = data[0];
    console.log(id);
    res.cookie("sessionId", id._id, {
      signed: true,
    });
  }

  next();
};
