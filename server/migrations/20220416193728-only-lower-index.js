module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addIndex('Users', [Sequelize.fn('lower', Sequelize.col('name'))], { name: 'name_lower', unique: true }).then(
    () => queryInterface.removeColumn('Users', 'lowerName'),
  ),

  down: (queryInterface, Sequelize) => new Promise((resolve, reject) => reject(new Exception('nope'))),
};
