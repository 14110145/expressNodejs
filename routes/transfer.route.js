const express = require("express");
const controller = require("../controllers/transfer.controller.js");
const router = express.Router();

router.post("/create", controller.postCreate);

router.get("/create", controller.create);

module.exports = router;
