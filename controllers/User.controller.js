const User = require("../models/User");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!",
      });
      return;
    }
  });
  User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    name: req.body.name,
    lastName: req.body.lastName,
  })
    .then((user) => {
      let token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: "1w",
      });
      res.status(200).send({
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        token: token,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
        msg:"request failed"
      });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "email Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(400).send({
          message: "Invalid Password!",
        });
      }

      let token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: "1w",
      });
      res.status(200).send({
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        token: token,
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
        msg:"request failed"
      });
    });
};

exports.getAllUsers = (req, res) => {
  User.findAll()
    .then((result) => {
      res.send({ users: result });
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
        msg:"request failed"
      });
    });
};

exports.findByID = (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => {
      res.status(200).send({
      user
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
        msg:"request failed"
      });
    });
};
