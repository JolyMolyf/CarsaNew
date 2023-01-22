const employees = require('./20211106091456-seed-employee');

const managers = [];

managers.push({
  person_id: employees.employees[11].person_id,
  creationDate: new Date()
});

managers.push({
  person_id: '007231fb-c687-4c38-9cbd-cb3158c3ace7',
  creationDate: new Date()
});

module.exports = {
  managers: managers,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Manager', managers, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Manager', null, {});
  }
};
