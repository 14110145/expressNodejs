const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  avatar: String,
  phone: String,
});
