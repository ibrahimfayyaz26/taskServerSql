const db = require("../db/db");
const {
    DataTypes
} = require("sequelize");

module.exports = ResetToken = db.define("resetPassword", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    email: {
        type: DataTypes.STRING,
    },
    token: {
        type: DataTypes.STRING,
    },
    used: {
        type: DataTypes.INTEGER,
        defaultValue:0,
    },
});