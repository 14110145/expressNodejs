const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller.js");
const validate = require("../validate/user.validate");
const multer = require("multer");

let upload = multer({ dest: "./public/uploads" });

router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.post(
  "/create",
  upload.single("avatar"),
  validate.postCreate,
  controller.postCreate
);

router.get("/:id", controller.get);

module.exports = router;
