'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Books', [
      {
        title: 'Memórias postumas de brás cubas.',
        author: 'Machado de Assis',
        pageQuantity: 345,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Notas do Subsolo.',
        author: 'Fiodor Dostoiesvki',
        pageQuantity: 123,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', null, [])
  }
};
