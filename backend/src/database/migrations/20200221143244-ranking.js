'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('ranking', { 
        id: Sequelize.INTEGER,
        user: {
          type: Sequelize.UUID,
          references: { model: 'user', key: 'id' },
          allfalse: false
        },
        title: {
          type: Sequelize.UUID,
          allfalse: false
        },
        point: {
          type: Sequelize.INTEGER,
          allfalse: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('ranking');
  }
};
