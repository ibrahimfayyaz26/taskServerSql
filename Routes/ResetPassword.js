const express = require("express");
const router = express.Router();
const { forget, change } = require("../controllers/Reset.controller");

router.post("/", (req, res) => {
  forget(req, res);
});

router.post("/Change", (req, res) => {
  change(req, res);
});

module.exports = router;
