const bcrypt = require('bcryptjs');

const employees = [
  {
    person_id: '632fb1d9-2ee6-4eea-aefb-24dbe3468c42', // CarSelector 1
    email: 'selector@test.com',
    password: bcrypt.hashSync('qwerty123', 10)
  },
  {
    person_id: '81c1dfcc-f224-47f2-95a8-3a4105411c75', // CarSelector 2
    email: 'jada_huffamn@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10)
  },
  {
    person_id: 'c060b776-0d38-421b-98b0-420c14186826', // Technician 1
    email: 'technician@test.com',
    password: bcrypt.hashSync('qwerty123', 10)
  },
  {
    person_id: '9f94659a-7bf2-41a7-abe5-0209609d5d51', // Technician 2
    email: 'andrew_zamora@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10)
  },
  {
    person_id: '86cc3f1f-efe0-481a-956f-655432cce053', // Technician 3
    email: 'sofia_erickson@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10)
  },
  {
    person_id: 'e7286593-b2e4-4d4c-81d0-1efa6cf22ffc', // Technician 4
    email: 'nia_fowler@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10)
  },
  {
    person_id: '007231fb-c687-4c38-9cbd-cb3158c3ace7', // Manager 1
    email: 'manager@test.com',
    password: bcrypt.hashSync('qwerty123', 10)
  }
];

module.exports = {
  employees: employees,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Employee', employees, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Employee', null, {});
  }
};
