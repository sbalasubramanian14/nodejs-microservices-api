const Sequelize = require("sequelize");

module.exports = sequelize.define(
  "System",
  {
    id: {
      type: Sequelize.INTEGER(100),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    sysname: Sequelize.STRING(100),
    ip: Sequelize.STRING(200),
    col4: Sequelize.STRING(200),
    col5: Sequelize.STRING(200),
    col6: Sequelize.STRING(200),
    col7: Sequelize.STRING(200),
    col8: Sequelize.STRING(200),
    col9: Sequelize.STRING(200),
    col10: Sequelize.STRING(200),
    col11: Sequelize.DATE,
    col12: Sequelize.DATE,
    col13: Sequelize.BIGINT,
  },
  {
    freezeTableName: true,
    tableName: "systems",
  }
);
