module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('GameVersions', 'notes', { type: Sequelize.TEXT, allowNull: true }),
  down: (queryInterface) => queryInterface.changeColumn('GameVersions', 'notes', { type: Sequelize.STRING, allowNull: true }),
};
