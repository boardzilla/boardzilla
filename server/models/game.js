'use strict';

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
  }, {
    getterMethods: {
      latestVersion: async function() {
        return await this.getGameVersions({limit: 1, order: [['version', 'desc']]}).first()
      },
    }
  })
  Game.associate = function(models) {
    models.Game.hasMany(models.GameVersion, {foreignKey: 'gameId'})
  };

  return Game;
};
