const express = require("express");
const router = express.Router();
const {
  upload
} = require("../config/Multer");
const {
  createProfile,
} = require("../controllers/Profile.controller");

router.put("/:id", upload.array("documents"), (req, res) => {
  // console.log("hello")
  createProfile(req, res);
});



module.exports = router;