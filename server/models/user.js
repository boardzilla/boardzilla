module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lowerName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  User.associate = function (models) {
    models.User.hasMany(models.Session, { foreignKey: 'creatorId' });
    models.User.hasMany(models.SessionUser, { foreignKey: 'userId' });
  };
  return User;
};
