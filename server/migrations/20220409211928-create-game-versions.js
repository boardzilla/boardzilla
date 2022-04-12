module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('GameVersions', {
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
    version: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    serverDigest: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    clientDigest: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      default: Sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      default: Sequelize.NOW,
    },
  }).then(() => queryInterface.addIndex('GameVersions', ['gameId', 'version'], { fields: ['gameId', 'version'], unique: true })),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('GameVersions'),
};
