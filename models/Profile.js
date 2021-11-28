const db = require("../db/db");
const { DataTypes } = require("sequelize");

const Profile = db.define("Profile", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  documents: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
  },
  industry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  facebookLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Profile;
