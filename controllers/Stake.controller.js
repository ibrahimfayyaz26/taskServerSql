const { Models } = require("../models/Models");

exports.createStake = async (req, res, next) => {
  const data = await Models.Wallet.findOne({
    where: {
      wallet: req.body.wallet,
    },
  });
  if (data) {
    data
      .createStake({
        releaseDate: req.body.releaseDate,
        bFTP: req.body.bFTP,
        currentDate: req.body.currentDate,
        stakeNumber: data.stakeNumber,
        dollar: req.body.dollar,
        network: req.body.network,
      })
      .then((result) => {
        Models.Wallet.update(
          {
            stakeNumber: result.stakeNumber + 1,
          },
          {
            where: {
              wallet: req.body.wallet,
            },
          }
        ).then(() => {
          res.send({
            status: true,
            data: result,
          });
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
          .createStake({
            releaseDate: req.body.releaseDate,
            bFTP: req.body.bFTP,
            currentDate: req.body.currentDate,
            stakeNumber: result.stakeNumber,
            dollar: req.body.dollar,
            network: req.body.network,
          })
          .then((result) => {
            Models.Wallet.update(
              {
                stakeNumber: result.stakeNumber + 1,
              },
              {
                where: {
                  wallet: req.body.wallet,
                },
              }
            ).then(() => {
              res.send({
                status: true,
                data: result,
              });
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

exports.getStakesAddress = (req, res, next) => {
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
      Result.getStakes()
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

exports.getStakesByNetwork = (req, res, next) => {
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
      Result.getStakes({
        where: {
          network: req.params.network,
        },
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
};

exports.deleteStake = (req, res) => {
  Models.Stake.findByPk(req.params.id)
    .then((data) => {
      if (data) {
        data.destroy();
        res.send({
          status: true,
          msg: "Deleted",
        });
      } else {
        res.send({
          status: false,
          msg: "Stake not found",
        });
      }
    })
    .catch((error) => {
      res.send({
        status: false,
        data: error.message,
      });
    });
};
