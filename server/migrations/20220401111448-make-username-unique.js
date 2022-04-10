'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex('Users', ['name'], {unique: true});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Users', ['name'], {unique: true});
  }
};
