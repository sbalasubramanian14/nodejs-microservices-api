"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all(
        queryInterface.addColumn("systems", "col4", Sequelize.STRING(200), {
          transaction: t,
        }),
        queryInterface.addColumn("systems", "col5", Sequelize.STRING(200), {
          transaction: t,
        }),
        queryInterface.addColumn("systems", "col6", Sequelize.STRING(200), {
          transaction: t,
        }),
        queryInterface.addColumn("systems", "col7", Sequelize.STRING(200), {
          transaction: t,
        }),
        queryInterface.addColumn("systems", "col8", Sequelize.STRING(200), {
          transaction: t,
        }),
        queryInterface.addColumn("systems", "col9", Sequelize.STRING(200), {
          transaction: t,
        }),
        queryInterface.addColumn("systems", "col10", Sequelize.STRING(200), {
          transaction: t,
        }),
        queryInterface.addColumn("systems", "col11", Sequelize.DATE, {
          transaction: t,
        }),
        queryInterface.addColumn("systems", "col12", Sequelize.DATE, {
          transaction: t,
        }),
        queryInterface.addColumn("systems", "col13", Sequelize.BIGINT, {
          transaction: t,
        })
      );
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("systems", "col4", { transaction: t }),
        queryInterface.removeColumn("systems", "col5", { transaction: t }),
        queryInterface.removeColumn("systems", "col6", { transaction: t }),
        queryInterface.removeColumn("systems", "col7", { transaction: t }),
        queryInterface.removeColumn("systems", "col8", { transaction: t }),
        queryInterface.removeColumn("systems", "col9", { transaction: t }),
        queryInterface.removeColumn("systems", "col10", { transaction: t }),
        queryInterface.removeColumn("systems", "col11", { transaction: t }),
        queryInterface.removeColumn("systems", "col12", { transaction: t }),
        queryInterface.removeColumn("systems", "col13", { transaction: t }),
      ]);
    });
  },
};
