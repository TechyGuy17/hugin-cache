'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.TEXT
      },
      key: {
        type: Sequelize.STRING
      },
      signature: {
        type: Sequelize.STRING
      },
      board: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING
      },
      tx_hash: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};