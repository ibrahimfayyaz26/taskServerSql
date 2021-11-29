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
    defaultValue: "",
  },
  businessWebsite: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  cardNumber: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  passport: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  idCard: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  phone: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  documents: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  city: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  country: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  language: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  industry: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  facebookLink: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
});

module.exports = User;
