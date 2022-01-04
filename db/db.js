const {
  Sequelize
} = require("sequelize");

const db = new Sequelize("node", "user", "fayyaz9700$MAY", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;