const Passport = require("../models/User");

exports.PassportGet = (req,res)=>{
  Passport.findByPk(req.params.id).then((r) => {
    res.send({
      passport: r.passport,
    });
  }).catch((err) => {
    res.send({
      message: err.message,
      msg:"request failed"
    });
  });
}

exports.PassportController = async (req, res) => {
  Passport.update(
    {
      passport: `${req.protocol}://${req.get("host")}/upload/${
        req.files[0].filename
      }` ,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      Passport.findByPk(req.params.id).then((r) => {
        res.send({
          passport: r.passport,
        });
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
        msg:"request failed"
      });
    });
};

exports.PassportDelete = async (req, res) => {
  Passport.update(
    {
      passport: "",
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      res.send({
          msg:"image removed"
      })
      
    })
    .catch((err) => {
      res.send({
        message: err.message,
        msg:"request failed"
      });
    });
};
