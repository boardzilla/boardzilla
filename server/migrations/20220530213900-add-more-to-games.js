module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Games', 'friendlyName', { type: Sequelize.STRING, allowNull: true })
    .then(() => queryInterface.addColumn('Games', 'description', { type: Sequelize.TEXT, allowNull: true })),
  down: (queryInterface) => queryInterface.removeColumn('Games', 'friendlyName')
    .then(() => queryInterface.removeColumn('Games', 'description')),
};
