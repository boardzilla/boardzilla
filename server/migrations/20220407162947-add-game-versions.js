module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.removeColumn('Sessions', 'gameId', { transaction: t }),
    queryInterface.addColumn('Sessions', 'gameVersionId', { type: Sequelize.INTEGER, allowNull: false }, { transaction: t }),
  ])),

  down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.addColumn('Sessions', 'gameId', { type: Sequelize.INTEGER, allowNull: false }, { transaction: t }),
    queryInterface.removeColumn('Sessions', 'gameVersionId', { transaction: t }),
  ])),
};
