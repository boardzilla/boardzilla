'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
      name: 'Tic Tac Toe',
      localDir: 'tictactoe',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {})
  }
};
