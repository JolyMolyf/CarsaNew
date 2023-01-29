const managers = [
  {
    person_id: '007231fb-c687-4c38-9cbd-cb3158c3ace7',
    creationDate: new Date()
  }
];

module.exports = {
  managers: managers,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Manager', managers, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Manager', null, {});
  }
};
