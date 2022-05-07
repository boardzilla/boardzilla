module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('SessionUsers', 'position', { type: Sequelize.INTEGER, allowNull: false })
    .then(() => queryInterface.addIndex('SessionUsers', ['sessionId', 'position'], { unique: true })),
  down: (queryInterface) => queryInterface.removeColumn('SessionUsers', 'position'),
};
