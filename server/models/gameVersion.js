const discordMarkdown = require('discord-markdown');

module.exports = (sequelize, DataTypes) => {
  const GameVersion = sequelize.define('GameVersion', {
    gameId: DataTypes.INTEGER,
    version: DataTypes.INTEGER,
    clientDigest: DataTypes.STRING,
    serverDigest: DataTypes.STRING,
    notes: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    beta: DataTypes.BOOLEAN,
  });
  GameVersion.associate = function (models) {
    models.GameVersion.belongsTo(models.Game, { foreignKey: 'gameId' });
    models.Session.belongsTo(models.Session, { foreignKey: 'gameVersionId' });
  };

  GameVersion.prototype.notesHTML = function() {
    return this.notes ? discordMarkdown.toHTML(this.notes) : null
  }
  return GameVersion;
};
