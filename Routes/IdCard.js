const express = require("express");
const router = express.Router();
const {
  upload
} = require("../config/Multer");
const {
IdCardController,
IdCardDelete,
IdCardGet
} = require("../controllers/IdCard.controller");

router.get("/:id", (req, res) => {
  IdCardGet(req, res);
});

router.put("/:id", upload.array("idCard"), (req, res) => {
  IdCardController(req, res);
});

router.delete("/:id", (req, res) => {
  IdCardDelete(req, res);
});

module.exports = router;