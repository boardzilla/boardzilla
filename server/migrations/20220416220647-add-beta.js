module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('GameVersions', 'beta', { allowNull: false, type: Sequelize.BOOLEAN, defaultValue: false }),
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('GameVersions', 'beta'),
};
