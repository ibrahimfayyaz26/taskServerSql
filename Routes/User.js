const express = require("express");
const router = express.Router();
const { upload } = require("../config/Multer");
const {
  signin,
  signup,
  getAllUsers,
} = require("../controllers/User.controller");

router.get("/", (req, res) => {
  getAllUsers(req, res);
});

router.post("/login", (req, res) => {
  signin(req, res);
});

router.post("/register", upload.single("image"), async (req, res) => {
  signup(req, res);
});

module.exports = router;
