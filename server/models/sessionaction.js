'use strict';
module.exports = (sequelize, DataTypes) => {
  const SessionAction = sequelize.define('SessionAction', {
    sessionId: DataTypes.INTEGER,
    sequence: DataTypes.INTEGER,
    player: DataTypes.INTEGER,
    action: DataTypes.JSON,
  }, {});
  SessionAction.associate = function(models) {
    models.SessionAction.belongsTo(models.Session, {foreignKey: 'sessionId'})
  };
  return SessionAction;
};
