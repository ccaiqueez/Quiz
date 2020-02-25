'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('question', { 
        titleId: {
          type: Sequelize.UUID,
          references: { model: 'title', key: 'id' },
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
