const discordMarkdown = require('discord-markdown');
const dayjs = require('dayjs');

module.exports = (sequelize, DataTypes) => {
  const ServerMessage = sequelize.define('ServerMessage', {
    title: DataTypes.TEXT,
    notes: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  ServerMessage.prototype.notesHTML = function () {
    return this.notes ? discordMarkdown.toHTML(this.notes) : null;
  };
  ServerMessage.prototype.formattedCreatedAt = function () {
    return dayjs(this.createdAt).format('YYYY-MM-DD h:mm');
  };

  return ServerMessage;
};
