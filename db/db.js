const { Sequelize } = require("sequelize");

const db = new Sequelize("node", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});


module.exports = db;
