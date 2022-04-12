module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.addColumn('Games', 'localDir', { type: Sequelize.STRING }, { transaction: t }),
    queryInterface.changeColumn('Games', 'content', { type: Sequelize.BLOB, allowNull: true }, { transaction: t }),
  ])),

  down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.removeColumn('Games', 'localDir', { transaction: t }),
    queryInterface.changeColumn('Games', 'content', { type: Sequelize.BLOB, allowNull: false }, { transaction: t }),
  ])),
};
