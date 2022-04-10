'use strict';
module.exports = (sequelize, DataTypes) => {
  const SessionUser = sequelize.define('SessionUser', {
    sessionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  SessionUser.associate = function(models) {
    models.SessionUser.belongsTo(models.Session, {foreignKey: 'sessionId'})
    models.SessionUser.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return SessionUser;
};
