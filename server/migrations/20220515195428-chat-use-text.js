module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('SessionChats', 'message', { type: Sequelize.TEXT, allowNull: false }),
  down: (queryInterface) => queryInterface.changeColumn('SessionChats', 'message', { type: Sequelize.STRING, allowNull: false }),
};
