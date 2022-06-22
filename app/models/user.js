'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    image: {
      type: DataTypes.STRING
    },
    userName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER
    },
    city: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    refresh_token: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};