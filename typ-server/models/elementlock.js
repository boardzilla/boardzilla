'use strict';
module.exports = (sequelize, DataTypes) => {
  const ElementLock = sequelize.define('ElementLock', {
    sessionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    element: DataTypes.STRING
  }, {});
  ElementLock.associate = function(models) {
    models.ElementLock.belongsTo(models.Session, {foreignKey: 'sessionId'})
    models.ElementLock.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return ElementLock;
};
