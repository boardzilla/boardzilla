module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Games', [{
    name: 'Tic Tac Toe',
    localDir: 'tictactoe',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Games', null, {}),
};
