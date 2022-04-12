module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Sessions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    gameId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    creatorId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    lastState: {
      allowNull: true,
      type: Sequelize.JSON,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Sessions'),
};
