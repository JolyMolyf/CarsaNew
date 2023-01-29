const selectors = [
  {
    person_id: '632fb1d9-2ee6-4eea-aefb-24dbe3468c42', // CarSelector 1
    creationDate: new Date()
  },
  {
    person_id: '81c1dfcc-f224-47f2-95a8-3a4105411c75', // CarSelector 2
    creationDate: new Date()
  }
];

module.exports = {
  selectors: selectors,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('CarSelector', selectors, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('CarSelector', null, {});
  }
};
