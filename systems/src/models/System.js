const Sequelize = require("sequelize");

module.exports = sequelize.define("System", {
  id: {
    type: Sequelize.INTEGER(100),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  sysname: Sequelize.STRING(100),
  ip: Sequelize.STRING(200),
});
