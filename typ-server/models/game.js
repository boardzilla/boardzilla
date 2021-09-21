'use strict';

const AdmZip = require('adm-zip')
const fs = require('fs');
const path = require('path');

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    content: DataTypes.BLOB,
    name: DataTypes.STRING,
    localDir: DataTypes.STRING,
  }, {
    getterMethods: {
      contentZip: function() {
        return new AdmZip(this.getDataValue('content'))
      },
    }
  });

  // uncomment to make associations here
  //
  // Game.associate = function(models) {
  // }

  Game.prototype.file = function(f) {
    if (this.getDataValue('localDir')) {
      return fs.readFileSync(path.join(this.getDataValue('localDir'), f))
    } else {
      return this.contentZip.readFile(f)
    }
  }

  return Game;
};
