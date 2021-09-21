'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SessionActions', {
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
      sequence: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      player: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      action: {
        allowNull: false,
        type: Sequelize.JSON
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
      queryInterface.addIndex('SessionActions', ['sessionId', 'sequence'], {fields: ['sessionId', 'sequence'], unique: true})
    }).then(() => {
      queryInterface.removeColumn('Sessions', 'lastState')
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SessionActions').then(() => {
      queryInterface.addColumn('Sessions', 'lastState', {allowNull: true, type: Sequelize.JSON})
    })
  }
};
