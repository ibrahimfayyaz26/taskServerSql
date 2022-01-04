const express = require("express");
const router = express.Router();

const {
    AprovingGet,
    ApproveController,
    AprovedGet,
} = require("../controllers/Aprove.controller");

router.get("/", (req, res) => {
  AprovingGet(req, res);
});

router.get("/aproved", (req, res) => {
  AprovedGet(req, res);
});


router.put("/:id", (req, res) => {
    ApproveController(req, res);
  });




module.exports = router;