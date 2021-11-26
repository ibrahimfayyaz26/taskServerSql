const db = require("../db/db");
const { DataTypes } = require("sequelize");

const Payment = db.define("Payment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  businessName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  businessWebsite: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cardNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
});

module.exports = Payment;
