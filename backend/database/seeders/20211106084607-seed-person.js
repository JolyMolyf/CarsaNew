const uuid = require('uuid');
const { faker } = require('@faker-js/faker');

const people = [];

for (let i = 0; i < 25; i++) {
  people.push({
    id: uuid.v4(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName()
  });
}

// Client
people.push({
  id: '6076dae1-73be-4c93-be95-a536584ded40',
  first_name: 'Magnus',
  last_name: 'Carlsen'
});

// CarSelector
people.push({
  id: '632fb1d9-2ee6-4eea-aefb-24dbe3468c42',
  first_name: 'Charles',
  last_name: 'Darwin'
});

// Technician
people.push({
  id: 'c060b776-0d38-421b-98b0-420c14186826',
  first_name: 'George',
  last_name: 'Orwell'
});

// Manager
people.push({
  id: '007231fb-c687-4c38-9cbd-cb3158c3ace7',
  first_name: 'John',
  last_name: 'Lennon'
});

module.exports = {
  people: people,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Person', people, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Person', null, {});
  }
};
