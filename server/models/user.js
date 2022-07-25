"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.interview, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      user.hasMany(models.memorized, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      user.hasMany(models.progblog, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      nickname: DataTypes.STRING,
      password: DataTypes.STRING,
      position: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      freezeTableName: true,
    }
  );
  return user;
};
