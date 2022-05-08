module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('GameVersions', 'notes', { type: Sequelize.STRING, allowNull: true }),
  down: (queryInterface) => queryInterface.removeColumn('GameVersions', 'notes'),
};
