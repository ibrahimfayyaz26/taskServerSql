const db = require("../db/db");
const {
  DataTypes
} = require("sequelize");

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
    type: DataTypes.STRING,
    defaultValue: "",
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
    type: DataTypes.STRING,
    defaultValue: "",
  },
  documents: {
    type: DataTypes.JSON(5555555),
    defaultValue: []
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
    type: DataTypes.JSON(5555555),
    defaultValue: {}
  },
  industry: {
    type: DataTypes.JSON(5555555),
    defaultValue: {}
  },
  facebookLink: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }
});

// queryInterface.addColumn('User', 'status', DataTypes.BOOLEAN);

module.exports = User;