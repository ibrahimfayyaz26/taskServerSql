const express = require("express");
const router = express.Router();
const { upload } = require("../config/Multer");
const {
  createPayment,
} = require("../controllers/Payment.controller");


router.put("/:id", upload.fields([{ name: 'passport'}, { name: 'idCard' }]),(req, res) => {
  
  createPayment(req, res);
});

module.exports = router;
