'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Notebooks', [
      {
        name: "TNG Season5 Captain's Log",
        notebookcover: "https://static.hollywoodreporter.com/sites/default/files/2017/09/star_trek-_the_next_generation-928x523.jpg",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
