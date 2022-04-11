'use strict';

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
  })
  Game.associate = function(models) {
    models.Game.hasMany(models.GameVersion, {foreignKey: 'gameId'})
  };

  Game.prototype.latestVersion = async function() {
    const gameVersions = await this.getGameVersions({limit: 1, order: [['version', 'desc']]})
    console.log("gameVersion", gameVersions)
    return gameVersions[0]
  }


  return Game;
};
