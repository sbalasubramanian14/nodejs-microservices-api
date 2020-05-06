"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("systems", {
      id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      sysname: Sequelize.STRING(100),
      ip: Sequelize.STRING(200),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("systems");
  },
};
