'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('title', { 
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          alloNull: false
        },
        category: {
          type: Sequelize.UUID,
          references: { model: 'category', key: 'id' },
          alloNull: false
        },
        name : {
          type: Sequelize.STRING(60),
          alloNull: false
        } 
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('title');
  }
};
