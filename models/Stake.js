const db = require("../db/db")
const {
    DataTypes
} = require("sequelize")

const Stake = db.define("Stake", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    bFTP: {
        type: DataTypes.FLOAT,
    },
    FTP: {
        type: DataTypes.FLOAT
    },
    releaseDate:{
        type:DataTypes.STRING,
    },
    timeSpan:{
        type:DataTypes.STRING,
    }
})

module.exports = Stake;