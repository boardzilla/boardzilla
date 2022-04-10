'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Games', 'localDir', { type: Sequelize.STRING }, { transaction: t }),
        queryInterface.changeColumn('Games', 'content', { type: Sequelize.BLOB, allowNull: true }, { transaction: t }),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Games', 'localDir', { transaction: t }),
        queryInterface.changeColumn('Games', 'content', { type: Sequelize.BLOB, allowNull: false }, { transaction: t }),
      ])
    })
  }
};
