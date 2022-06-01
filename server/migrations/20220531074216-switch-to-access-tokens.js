module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('SessionUsers', 'userId', { type: Sequelize.INTEGER, allowNull: true })
    .then(() => queryInterface.changeColumn('Sessions', 'creatorId', { type: Sequelize.INTEGER, allowNull: true }))
    .then(() => queryInterface.sequelize.query('TRUNCATE "Sessions"'))
    .then(() => queryInterface.sequelize.query('TRUNCATE "SessionUsers"'))
    .then(() => queryInterface.addColumn('SessionUsers', 'accessToken', { type: Sequelize.STRING, allowNull: false }))
    .then(() => queryInterface.sequelize.query("CREATE EXTENSION IF NOT EXISTS pgcrypto"))
    .then(() => queryInterface.addColumn('Users', 'accessToken', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: queryInterface.sequelize.literal("encode(gen_random_bytes(32), 'hex')"),
    }))
    .then(() => queryInterface.addIndex('SessionUsers', ['sessionId', 'accessToken'], { fields: ['sessionId', 'accessToken'], unique: true }))
    .then(() => queryInterface.addIndex('Users', ['accessToken'], { fields: ['accessToken'], unique: true })),
  down: (queryInterface) => new Promise((resolve, reject) => reject("nope!")),
};
