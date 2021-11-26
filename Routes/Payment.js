const express = require("express");
const router = express.Router();
const { upload } = require("../config/Multer");
const {
  createPayment,
  getAllPayments,
} = require("../controllers/Payment.controller");

router.get("/", (req, res) => {
  getAllPayments(req, res);
});

router.post("/", upload.single("image"), async (req, res) => {
  createPayment(req, res);
});

module.exports = router;
