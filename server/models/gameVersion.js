'use strict';

module.exports = (sequelize, DataTypes) => {
  const GameVersion = sequelize.define('GameVersion', {
    gameId: DataTypes.INTEGER,
    version: DataTypes.INTEGER,
    clientDigest: DataTypes.STRING,
    serverDigest: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  GameVersion.associate = function(models) {
    models.GameVersion.belongsTo(models.Game, {foreignKey: 'gameId'})
    models.Session.belongsTo(models.Session, {foreignKey: 'gameVersionId'})
  };

  return GameVersion;
};
