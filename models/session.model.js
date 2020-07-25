const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  amount: Number,
  accountId: String,
  userId: String,
});

let Session = mongoose.model("Session", userSchema, "sessions");

module.exports = Session;
