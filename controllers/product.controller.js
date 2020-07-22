let db = require("../db.js");

module.exports.index = (req, res) => {;
  console.log(parseInt(req.query.page) || 1);
  let page = parseInt(req.query.page) || 1;
  let perPage = 6;
  let start = (page - 1) * perPage;
  let end = page * perPage;
  res.render("products/index.pug", {
    products: db.get("products").value().slice(start, end),
    pages: parseInt(page),
  });
};
