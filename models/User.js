const db = require("../db/db");
const { DataTypes } = require("sequelize");

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  businessName: {
    type: DataTypes.STRING,
  },
  businessWebsite: {
    type: DataTypes.STRING,
  },
  cardNumber: {
    type: DataTypes.STRING,
  },
  passport: {
    type: DataTypes.STRING,
  },
  idCard: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  documents: {
    type: DataTypes.JSON(5555555),
  },
  city: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  language: {
    type: DataTypes.STRING,
  },
  industry: {
    type: DataTypes.STRING,
  },
  facebookLink: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
