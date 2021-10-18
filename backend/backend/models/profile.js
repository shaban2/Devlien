'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.Account, {
        foreignKey: 'account_id',
        as: 'account',
      });
    }
  };
  Profile.init({
    avatar: DataTypes.STRING,
    stack: DataTypes.STRING,
    location: DataTypes.STRING,
    role: DataTypes.STRING,
    account_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};