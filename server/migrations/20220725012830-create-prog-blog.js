"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("progblog", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      subject: {
        type: Sequelize.STRING,
      },
      stateJson: {
        type: Sequelize.TEXT,
      },
      stateHTML: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("progblog");
  },
};
