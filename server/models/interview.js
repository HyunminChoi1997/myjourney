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
      interview.hasMany(models.memorized, {
        foreignKey: "interview_id",
        sourceKey: "id",
      });
    }
  }
  interview.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING(750),
      subject: DataTypes.STRING,
      language: DataTypes.STRING,
      show: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "interview",
      freezeTableName: true,
    }
  );
  return interview;
};
