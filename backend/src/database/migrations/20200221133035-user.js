'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('user', { 
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          alloNull: false
        },
        username: {
          type: Sequelize.STRING(40),
          alloNull: false,
          unique: true
        },
        email: {
          type: Sequelize.STRING(80),
          alloNull: false,
          unique: true
        },
        password_hash: {
          type: Sequelize.STRING(40),
          alloNull: false
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('user');
  }
};
