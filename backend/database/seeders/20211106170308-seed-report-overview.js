const uuid = require('uuid');
const { faker } = require('@faker-js/faker');
const cars = require('./20211106103041-seed-car');
const technicians = require('./20211106093733-seed-technician');

const overviews = [];

let i = 0;
while (overviews.length < 5) {
  overviews.push({
    id: uuid.v4(),
    date: faker.date.recent(),
    car_id: cars.cars[i * 2].id,
    technician_id: technicians.technicians[i].person_id
  });
  i++;
}

overviews.push({
  id: 'f1b4c1ad-87a8-4887-8d9d-217e447c576e',
  date: new Date(),
  car_id: 'caf09ebc-418e-4272-a2f9-4ad1121dca0e',
  technician_id: 'c060b776-0d38-421b-98b0-420c14186826'
});

module.exports = {
  overviews: overviews,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('ReportOverview', overviews, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ReportOverview', null, {});
  }
};
