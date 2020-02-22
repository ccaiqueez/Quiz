'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('question', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          alloNull: false
        },
        title: {
          type: Sequelize.INTEGER,
          alloNull: false
        },
        asking: {
          type: Sequelize.STRING(60),
          alloNull: false
        },
        response: {
          type: Sequelize.STRING(60),
          alloNull: false
        },
        order: {
          type: Sequelize.INTEGER,
          alloNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('question');
  }
};
