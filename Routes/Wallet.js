const express = require("express");
const {
  getStakesAddress,
  createStake,
  deleteStake,
  getStakesByNetwork,
} = require("../controllers/Stake.controller");
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

router.post("/stake", (req, res) => {
  getStakesAddress(req, res);
});

router.post("/stake/:network", (req, res) => {
  getStakesByNetwork(req, res);
});

router.post("/createStake", (req, res) => {
  createStake(req, res);
});

router.delete("/stake/:id", (req, res) => {
  deleteStake(req, res);
});

module.exports = router;
