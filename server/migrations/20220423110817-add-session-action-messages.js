module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('SessionActions', 'messages', { type: Sequelize.JSON }),
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('SessionActions', 'messages'),
};
