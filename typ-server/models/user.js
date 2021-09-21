'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    models.User.hasMany(models.Session, {foreignKey: 'creatorId'})
    models.User.hasMany(models.SessionUser, {foreignKey: 'userId'})
  };
  return User;
};