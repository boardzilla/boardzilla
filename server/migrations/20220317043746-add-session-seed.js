'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Sessions', 'seed', { type: Sequelize.STRING })
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('Sessions', 'seed')
  }
};
