module.exports = (sequelize, DataTypes) => {
  const SessionChat = sequelize.define('SessionChat', {
    sessionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    message: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  SessionChat.associate = function (models) {
    models.SessionAction.belongsTo(models.Session, { foreignKey: 'sessionId' });
  };
  return SessionChat;
};
