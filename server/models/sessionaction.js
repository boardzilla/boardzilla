module.exports = (sequelize, DataTypes) => {
  const SessionAction = sequelize.define('SessionAction', {
    sessionId: DataTypes.INTEGER,
    sequence: DataTypes.INTEGER,
    player: DataTypes.INTEGER,
    action: DataTypes.JSON,
    messages: DataTypes.JSON,
    createdAt: DataTypes.DATE,
  }, {});
  SessionAction.associate = function (models) {
    models.SessionAction.belongsTo(models.Session, { foreignKey: 'sessionId' });
  };
  return SessionAction;
};
