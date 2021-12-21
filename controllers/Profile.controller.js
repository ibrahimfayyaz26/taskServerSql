const Profile = require("../models/User");
const axios = require("axios");
const { GetResponseCom } = require("./GetResponse");

exports.createProfile = (req, res) => {
  Profile.update(
    {
      country: req.body.country,
      city: req.body.city,
      phone: req.body.phone,
      language: {
        lang: req.body.language,
      },
      industry: {
        indus: req.body.industry,
      },
      facebookLink: req.body.facebookLink,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      Profile.findByPk(req.params.id).then((r) => {
        res.send({
          id: r.id,
          email: r.email,
          country: r.country,
          city: r.city,
          phone: r.phone,
          language: r.language,
          industry: r.industry,
          facebookLink: r.facebookLink,
        });
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: err,
        msg: err.message,
      });
    });
};
