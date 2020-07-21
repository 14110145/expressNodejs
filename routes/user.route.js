const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller.js");
const validate = require("../validate/user.validate");

router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.post("/create", validate.postCreate, controller.postCreate);

router.get("/coockie", function (req, res, next) {
  res.cookie("user-id", 565656);
  res.send("Set coockie done!!!");
});

router.get("/:id", controller.get);

module.exports = router;
