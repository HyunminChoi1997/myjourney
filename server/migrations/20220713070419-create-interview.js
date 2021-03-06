"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("interview", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
      },
      answer: {
        type: Sequelize.STRING(750),
      },
      subject: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      show: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("interview");
  },
};
