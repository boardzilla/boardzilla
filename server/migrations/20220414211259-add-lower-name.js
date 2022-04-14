module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Users', 'lowerName', { type: Sequelize.STRING, unique: true, allowNull: true }).then(() => queryInterface.sequelize.query('UPDATE "Users" SET "lowerName" = lower("name")')).then(() => queryInterface.changeColumn('Users', 'lowerName', { type: Sequelize.STRING, unique: true, allowNull: false })),
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Users', 'lowerName'),
};
