// let db = require("../db.js");
const Product = require("../models/product.model");

// module.exports.index = (req, res) => {
//   let page = parseInt(req.query.page) > 0 ? req.query.page : 1;
//   let perPage = 6;
//   let start = (page - 1) * perPage;
//   let end = page * perPage;
//   res.render("products/index.pug", {
//     products: db.get("products").value().slice(start, end),
//     pages: parseInt(page),
//   });
// };

module.exports.index = async (req, res) => {
  let page = parseInt(req.query.page) > 0 ? req.query.page : 0;
  let products = await Product.find()
    .limit(6)
    .skip(page * 6);
  res.render("products/index.pug", {
    products: products,
    pages: parseInt(page),
  });
};
