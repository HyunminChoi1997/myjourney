"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class memorized extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      memorized.belongsTo(models.user, {
        foreignKey: "user_id",
        targetKey: "id",
      });
      memorized.belongsTo(models.interview, {
        foreignKey: "interview_id",
        targetKey: "id",
      });
    }
  }
  memorized.init(
    {},
    {
      sequelize,
      modelName: "memorized",
      freezeTableName: true,
    }
  );
  return memorized;
};
