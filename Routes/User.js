const express = require("express");
const router = express.Router();
const { upload } = require("../config/Multer");
const {
  signin,
  signup,
  getAllUsers,
  findByID,
} = require("../controllers/User.controller");

router.get("/", (req, res) => {
  getAllUsers(req, res);
});

router.post("/login", (req, res) => {
  signin(req, res);
});

router.post("/register",(req, res) => {
  signup(req, res);
});

router.get("/:id", (req, res) => {
  findByID(req,res)
});

module.exports = router;
