const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');
const people = require('./20211106084607-seed-person');

const employees = [];

for (let i = 0; i < 12; i++) {
  employees.push({
    person_id: people.people[10 + i].id,
    email: faker.internet.email(),
    password: bcrypt.hashSync('qwerty123', 10)
  });
}

// CarSelector
employees.push({
  person_id: '632fb1d9-2ee6-4eea-aefb-24dbe3468c42',
  email: 'selector@test.com',
  password: bcrypt.hashSync('qwerty123', 10)
});

// Technician
employees.push({
  person_id: 'c060b776-0d38-421b-98b0-420c14186826',
  email: 'technician@test.com',
  password: bcrypt.hashSync('qwerty123', 10)
});

// Manager
employees.push({
  person_id: '007231fb-c687-4c38-9cbd-cb3158c3ace7',
  email: 'manager@test.com',
  password: bcrypt.hashSync('qwerty123', 10)
});

module.exports = {
  employees: employees,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Employee', employees, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Employee', null, {});
  }
};
