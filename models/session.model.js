const mongoose = require("mongoose");

let sessionSchema = new mongoose.Schema({
  cart: { type: mongoose.Schema.Types.Mixed, default: {} },
}, { minimize: false });

let Session = mongoose.model("Session", sessionSchema, "sessions");

module.exports = Session;
