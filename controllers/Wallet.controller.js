const { Models } = require("../models/Models");

exports.create = async (req, res, next) => {
  const data = await Models.Wallet.findOne({
    where: {
      wallet: req.body.wallet,
    },
  });
  if (data) {
    data
      .createTransaction({
        rate: req.body.rate,
        bnb: req.body.bnb ? req.body.bnb : 0,
        ether: req.body.ether ? req.body.ether : 0,
        amount: req.body.amount,
        hash:req.body.hash
      })
      .then((result) => {
        res.send({
          status: true,
          data: result,
        });
      })
      .catch((error) => {
        res.send({
          status: false,
          data: error.message,
        });
      });
  } else {
    Models.Wallet.create({
      wallet: req.body.wallet,
    })
      .then((result) => {
        result
          .createTransaction({
            rate: req.body.rate,
            bnb: req.body.bnb ? req.body.bnb : 0,
            ether: req.body.ether ? req.body.ether : 0,
            amount: req.body.amount,
            hash:req.body.hash
          })
          .then((result) => {
            res.send({
              status: true,
              data: result,
            });
          })
          .catch((error) => {
            res.send({
              status: false,
              data: error.message,
            });
          });
      })
      .catch((error) => {
        res.send({
          status: false,
          data: error.message,
        });
      });
  }
};

exports.getTransactionsAddress = (req, res, next) => {
  Models.Wallet.findOne({
    where: {
      wallet: req.body.wallet,
    },
  })
    .then((Result) => {
      if (!Result) {
        res.send({
          status: false,
          data: "wallet not found",
        });
      }
      Result.getTransactions()
        .then((result) => {
          res.send({
            status: true,
            data: result,
          });
        })
        .catch((error) => {
          res.send({
            status: false,
            data: error.message,
          });
        });
    })
    .catch((error) => {
      res.send({
        status: false,
        data: error.message,
      });
    });
};
