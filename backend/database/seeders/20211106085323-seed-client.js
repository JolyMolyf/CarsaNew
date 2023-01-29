const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

const clients = [
  {
    person_id: '6076dae1-73be-4c93-be95-a536584ded40', // Client 1
    email: 'client@test.com',
    password: bcrypt.hashSync('qwerty123', 10),
    phone: faker.phone.number('+48#########'),
    creationDate: new Date()
  },
  {
    person_id: '1b1467d7-19ae-471c-93ae-f12d69cee1bc', // Client 2
    email: 'billy_morse@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10),
    phone: faker.phone.number('+48#########'),
    creationDate: new Date()
  },
  {
    person_id: '03f1a656-3f13-417a-acc0-2352fe092165', // Client 3
    email: 'teresa_lozano@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10),
    phone: faker.phone.number('+48#########'),
    creationDate: new Date()
  },
  {
    person_id: 'ebf38dcc-87db-4927-b6e3-c4a1217f5e99', // Client 4
    email: 'katie_riley@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10),
    phone: faker.phone.number('+48#########'),
    creationDate: new Date()
  },
  {
    person_id: 'bca2c536-cbd3-4ba2-b658-8ab110c0a991', // Client 5
    email: 'lia_goodman@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10),
    phone: faker.phone.number('+48#########'),
    creationDate: new Date()
  },
  {
    person_id: '1088d9ed-20cd-41e6-99f0-f396b714f572', // Client 6
    email: 'judy_small@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10),
    phone: faker.phone.number('+48#########'),
    creationDate: new Date()
  },
  {
    person_id: '3fa890b5-0985-4d88-a38a-8c684b52bae0', // Client 7
    email: 'harry_rigs@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10),
    phone: faker.phone.number('+48#########'),
    creationDate: new Date()
  },
  {
    person_id: '7d03a5d4-11f6-4228-8fc5-9eb63154c21f', // Client 8
    email: 'carlos_peters@gmail.com',
    password: bcrypt.hashSync('qwerty123', 10),
    phone: faker.phone.number('+48#########'),
    creationDate: new Date()
  }
];

module.exports = {
  clients: clients,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Client', clients, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Client', null, {});
  }
};
