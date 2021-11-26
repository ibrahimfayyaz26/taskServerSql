const { Sequelize } = require("sequelize");

const db = new Sequelize("node", "root", "fayyaz9700", {
  host: "localhost",
  dialect: "mysql",
});


module.exports = db;
