const express = require("express");
const router = express.Router();

const {
    ApprovingGet,
    ApproveController,
    ApprovedGet,
} = require("../controllers/Approve.controller");

router.get("/", (req, res) => {
  ApprovingGet(req, res);
});

router.get("/approved", (req, res) => {
  ApprovedGet(req, res);
});


router.put("/:id", (req, res) => {
    ApproveController(req, res);
  });




module.exports = router;