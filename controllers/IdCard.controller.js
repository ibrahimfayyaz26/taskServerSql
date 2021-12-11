const IdCard = require("../models/User");

exports.IdCardGet = (req,res)=>{
  IdCard.findByPk(req.params.id).then((r) => {
    res.send({
      idCard: r.idCard,
    });
  }).catch((err) => {
    res.status(400).send({
      message: new Error(err.message),
      msg:err.message
    });
  });
}

exports.IdCardController = async (req, res) => {
  IdCard.update(
    {
      idCard: `${req.protocol}://${req.get("host")}/upload/${
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
      IdCard.findByPk(req.params.id).then((r) => {
        res.send({
          idCard: r.idCard,
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

exports.IdCardDelete = async (req, res) => {
  IdCard.update(
    {
      idCard: "",
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
