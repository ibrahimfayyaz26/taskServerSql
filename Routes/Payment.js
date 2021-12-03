const express = require("express");
const router = express.Router();
const { createPayment } = require("../controllers/Payment.controller");

router.put("/:id", (req, res) => {
  createPayment(req, res);
});

module.exports = router;
