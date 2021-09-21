'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    gameId: DataTypes.INTEGER,
    creatorId: DataTypes.INTEGER
  }, {});
  Session.associate = function(models) {
    models.Session.hasMany(models.SessionUser, {foreignKey: 'sessionId'})
    models.Session.hasMany(models.ElementLock, {foreignKey: 'sessionId'})
    models.Session.hasMany(models.SessionAction, {foreignKey: 'sessionId', as: 'actions'})
    models.Session.belongsTo(models.Game, {foreignKey: 'gameId'})
    models.Session.belongsTo(models.User, {
      constraints: false,
      foreignKey: 'creatorId',
      as: 'creator'
    })
  }
  return Session;
};
