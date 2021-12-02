const express = require("express");
const router = express.Router();
const {
  upload
} = require("../config/Multer");
const {
  DocumentsController,
  DocumentsDelete,
  DocumentsGet
} = require("../controllers/Documents.controller");

router.get("/:id", (req, res) => {
  DocumentsGet(req, res);
});

router.put("/:id", upload.array("documents"), (req, res) => {
  DocumentsController(req, res);
});

router.delete("/:id", (req, res) => {
  DocumentsDelete(req, res);
});

module.exports = router;