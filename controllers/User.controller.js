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
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    image: `${req.protocol}://${req.get("host")}/upload/${req.file.filename}`,
  })
    .then((result) => {
      res.send({ message: "User was registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
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
        return res.status(401).send({
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: "1w",
      });
      res.status(200).send({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        token: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.getAllUsers = (req, res) => {
  User.findAll()
    .then((result) => {
      res.send({ users: result });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
