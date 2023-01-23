const uuid = require('uuid');
const { faker } = require('@faker-js/faker');

const locations = [];

for (let i = 0; i < 20; i++) {
  locations.push({
    id: uuid.v4(),
    country: faker.address.country(),
    state: faker.address.state(),
    city: faker.address.cityName(),
    postal_code: faker.address.zipCode(),
    street: faker.address.street()
  });
}

locations.push({
  id: '26096f88-10e3-4196-a9e7-10c50ddf129b',
  country: 'Polska',
  state: 'Mazowia',
  city: 'Warszawa',
  postal_code: '02-008',
  street: 'Koszykowa'
});

module.exports = {
  locations: locations,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Location', locations, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Location', null, {});
  }
};
