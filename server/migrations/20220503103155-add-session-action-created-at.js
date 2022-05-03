'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('SessionActions', 'createdAt', {
    allowNull: false,
    type: Sequelize.DATE,
    default: Sequelize.NOW,
  }),
  down: (queryInterface) => queryInterface.removeColumn('SessionActions', 'createdAt'),
};
