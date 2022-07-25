"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class progblog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      progblog.belongsTo(models.user, {
        foreignKey: "user_id",
        targetKey: "id",
      });
    }
  }
  progblog.init(
    {
      title: DataTypes.STRING,
      subject: DataTypes.STRING,
      stateJson: DataTypes.TEXT,
      stateHTML: DataTypes.TEXT,
      show: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "progblog",
      freezeTableName: true,
    }
  );
  return progblog;
};
