module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('SessionUsers', 'userId', { type: Sequelize.INTEGER, allowNull: true })
    .then(() => queryInterface.changeColumn('Sessions', 'creatorId', { type: Sequelize.INTEGER, allowNull: true }))
    .then(() => queryInterface.addColumn('SessionUsers', 'accessToken', { type: Sequelize.STRING, allowNull: false }))
    .then(() => queryInterface.sequelize.query("CREATE EXTENSION IF NOT EXISTS pgcrypto"))
    .then(() => queryInterface.addColumn('Users', 'accessToken', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: Sequelize.fn("encode", "gen_random_bytes(32)::bytea", 'hex'),
    })),
  down: (queryInterface) => new Promise((resolve, reject) => reject("nope!")),
};
