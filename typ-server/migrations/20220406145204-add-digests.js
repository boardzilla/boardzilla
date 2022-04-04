'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Games', 'clientDigest', { type: Sequelize.STRING }, { transaction: t }),
        queryInterface.addColumn('Games', 'serverDigest', { type: Sequelize.STRING }, { transaction: t }),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Games', 'clientDigest', { type: Sequelize.STRING }, { transaction: t }),
        queryInterface.removeColumn('Games', 'serverDigest', { type: Sequelize.STRING }, { transaction: t }),
      ])
    })
  }
};
