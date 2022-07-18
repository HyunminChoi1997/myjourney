"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("memorized", "user_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    await queryInterface.addColumn("memorized", "interview_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "interview",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("memorized", "user_id");
    await queryInterface.removeColumn("memorized", "interview_id");
  },
};
