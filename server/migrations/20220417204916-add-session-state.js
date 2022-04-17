module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Sessions', 'state', { type: Sequelize.STRING, allowNull: false, defaultValue: 'ready' }),
  down: (queryInterface) => queryInterface.removeColumn('Sessions', 'state'),
};
