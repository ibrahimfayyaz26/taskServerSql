const express = require("express");
const router = express.Router();
const {
  upload
} = require("../config/Multer");
const {
  PassportController,
  PassportDelete,
  PassportGet
} = require("../controllers/Passport.controller");

router.get("/:id", (req, res) => {
  PassportGet(req, res);
});

router.put("/:id", upload.array("passport"), (req, res) => {
  PassportController(req, res);
});

router.delete("/:id", (req, res) => {
  PassportDelete(req, res);
});

module.exports = router;