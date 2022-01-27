const express = require("express");
const router = express.Router();
const {
  create,
  getTransactionsAddress,
} = require("../controllers/Wallet.controller");

router.post("/", (req, res) => {
  // Get user all transaction with wallet address
  getTransactionsAddress(req, res);
});

router.post("/create", (req, res) => {
  // Create Transaction
  create(req, res);
});

module.exports = router;
