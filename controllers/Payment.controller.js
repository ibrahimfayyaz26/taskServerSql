const Payment = require("../models/User");

exports.createPayment = async (req, res) => {
  Payment.update({
      businessName: req.body.businessName,
      businessWebsite: req.body.businessWebsite,
      cardNumber: req.body.cardNumber,
    }, {
      where: {
        id: req.params.id,
      },
    })
    .then((result) => {
      Payment.findByPk(req.params.id).then((r) => {
        res.send({
          id: r.id,
          email: r.email,
          businessName: r.businessName,
          businessWebsite: r.businessWebsite,
          cardNumber: r.cardNumber,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};