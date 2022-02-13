const db = require("../db/db")
const {
    DataTypes
} = require("sequelize")

const Transaction = db.define("Transaction", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    rate: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    bnb: {
        type: DataTypes.FLOAT,
    },
    ether: {
        type: DataTypes.FLOAT
    },
    hash:{
        type:DataTypes.STRING
    }
})

module.exports = Transaction;