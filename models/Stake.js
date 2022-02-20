const db = require("../db/db");
const { DataTypes } = require("sequelize");

const Stake = db.define("Stake", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  bFTP: {
    type: DataTypes.FLOAT,
  },
  releaseDate: {
    type: DataTypes.STRING,
  },
  currentDate: {
    type: DataTypes.STRING,
  },
  stakeNumber: {
    type: DataTypes.INTEGER,
  },
  dollar: {
    type: DataTypes.FLOAT,
  },
  network: {
    type: DataTypes.STRING,
  },
});

module.exports = Stake;
