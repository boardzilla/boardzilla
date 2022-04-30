'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('SessionUsers', 'color', { type: Sequelize.STRING, allowNull: false }),
  down: (queryInterface) => queryInterface.removeColumn('SessionUsers', 'color'),
};
