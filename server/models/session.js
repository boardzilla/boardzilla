module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    gameVersionId: DataTypes.INTEGER,
    creatorId: DataTypes.INTEGER,
    seed: DataTypes.STRING,
    state: DataTypes.STRING,
  }, {});
  Session.associate = function (models) {
    models.Session.hasMany(models.SessionUser, { foreignKey: 'sessionId' });
    models.Session.hasMany(models.ElementLock, { foreignKey: 'sessionId' });
    models.Session.hasMany(models.SessionAction, { foreignKey: 'sessionId', as: 'actions' });
    models.Session.hasOne(models.GameVersion, { sourceKey: 'gameVersionId', foreignKey: 'id' });
    models.Session.belongsTo(models.User, {
      constraints: false,
      foreignKey: 'creatorId',
      as: 'creator',
    });
  };
  return Session;
};
