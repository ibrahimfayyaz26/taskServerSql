const Payment = require("../models/Payment");

exports.createPayment = (req, res) => {
  Payment.create({
    businessName: req.body.businessName,
    businessWebsite: req.body.businessWebsite,
    cardNumber: req.body.cardNumber,
    image: `${req.protocol}://${req.get("host")}/upload/${req.file.filename}`,
  })
    .then((result) => {
      res.send({ product: result });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.getAllPayments = (req, res) => {
  Payment.findAll()
    .then((result) => {
      res.send({ Payments: result });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
