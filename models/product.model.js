const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

let Product = mongoose.model("Product", userSchema, "products");

module.exports = Product;
