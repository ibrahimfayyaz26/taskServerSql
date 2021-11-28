const express = require("express");
const router = express.Router();
const { upload } = require("../config/Multer");
const {
  createProfile,
} = require("../controllers/Profile.controller");

router.post("/", upload.array("documents"),(req, res) => {
  createProfile(req, res);
});

module.exports = router;
