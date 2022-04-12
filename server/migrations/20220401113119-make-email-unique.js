module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Users', 'email', { type: Sequelize.STRING, unique: true }),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Users', 'email', { type: Sequelize.STRING, unique: true }),
};
