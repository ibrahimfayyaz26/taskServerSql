const Payment = require("../models/User");

exports.createPayment = async (req, res) => {
  Payment.update({
      businessName: req.body.businessName,
      businessWebsite: req.body.businessWebsite,
      cardNumber: req.body.cardNumber,
      passport: req.files.passport[0] ?
        `${req.protocol}://${req.get("host")}/upload/${
            req.files.passport[0].filename
          }` :
        "",
      idCard: req.files.idCard[0] ?
        `${req.protocol}://${req.get("host")}/upload/${
            req.files.idCard[0].filename
          }` :
        "",
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
          idCard: r.idCard,
          passport: r.passport,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};