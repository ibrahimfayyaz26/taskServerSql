const { Sequelize } = require("sequelize");

const db = new Sequelize("node", "node", "fayyaz9700", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
