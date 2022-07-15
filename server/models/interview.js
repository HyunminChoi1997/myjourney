"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class interview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      interview.belongsTo(models.user, {
        foreignKey: "user_id",
        targetKey: "id",
      });
    }
  }
  interview.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING(750),
      subject: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "interview",
      freezeTableName: true,
    }
  );
  return interview;
};
