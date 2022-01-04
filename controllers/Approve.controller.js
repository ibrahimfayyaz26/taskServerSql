const Approve = require("../models/User");

exports.ApprovingGet = (req, res) => {
  Approve.findAll({
      where: {
        status: 0,
      },
    })
    .then((r) => {
      res.send(r);
    })
    .catch((err) => {
      res.status(400).send({
        message: new Error(err.message),
        msg: err.message,
      });
    });
};

exports.ApproveController = async (req, res) => {
  Approve.update({
    status: req.body.status,
  }, {
    where: {
      id: req.params.id,
    },
  }).then(async () => {
    const data = await Approve.findByPk(req.params.id);
    if (data && data.status == 2) {
      data.destroy();
      res.send(data);
    } else if (data) {
      res.send(data);
    }
  });
};

exports.ApprovedGet = (req, res) => {
  Approve.findAll({
      where: {
        status: 1,
      },
    })
    .then((r) => {
      res.send(r);
    })
    .catch((err) => {
      res.status(400).send({
        message: new Error(err.message),
        msg: err.message,
      });
    });
};