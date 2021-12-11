const Passport = require("../models/User");

exports.PassportGet = (req,res)=>{
  Passport.findByPk(req.params.id).then((r) => {
    res.send({
      passport: r.passport,
    });
  }).catch((err) => {
    res.status(400).send({
      message: new Error(err.message),
      msg:err.message
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
      res.status(400).send({
        message: new Error(err.message),
        msg:err.message
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
      res.status(400).send({
        message: new Error(err.message),
        msg:err.message
      });
    });
};
