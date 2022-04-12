module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addIndex('Users', ['name'], { unique: true }),

  down: (queryInterface, Sequelize) => queryInterface.removeIndex('Users', ['name'], { unique: true }),
};
