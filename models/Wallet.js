const db = require("../db/db")
const {DataTypes} = require("sequelize")

const Wallet = db.define("Wallet",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    wallet:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Wallet;