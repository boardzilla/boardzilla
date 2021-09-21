'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ElementLocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sessionId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      element: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      queryInterface.addIndex('ElementLocks', ['sessionId', 'element'], {fields: ['sessionId', 'element'], unique: true});
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('ElementLocks');
  }
};
