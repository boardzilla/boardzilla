module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Sessions', 'seed', { type: Sequelize.STRING }),

  down: (queryInterface) => queryInterface.removeColumn('Sessions', 'seed'),
};
