module.exports = (sequelize, DataTypes) => {
  const SessionChat = sequelize.define('SessionChat', {
    sessionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  SessionChat.associate = function (models) {
    models.SessionAction.belongsTo(models.Session, { foreignKey: 'sessionId' });
  };
  return SessionChat;
};
