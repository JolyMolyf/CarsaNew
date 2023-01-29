const uuid = require('uuid');
const { faker } = require('@faker-js/faker');
const cars = require('./20211106103041-seed-car');

const overviews = [];

for (let i = 0; i < cars.cars.length; i++) {
  let technicianId;

  switch (i % 4) {
    case 0:
      technicianId = 'c060b776-0d38-421b-98b0-420c14186826';
      break;
    case 1:
      technicianId = '9f94659a-7bf2-41a7-abe5-0209609d5d51';
      break;
    case 2:
      technicianId = '86cc3f1f-efe0-481a-956f-655432cce053';
      break;
    case 3:
      technicianId = 'e7286593-b2e4-4d4c-81d0-1efa6cf22ffc';
      break;
  }

  overviews.push({
    id: uuid.v4(),
    date: faker.date.recent(),
    car_id: cars.cars[i].id,
    technician_id: technicianId
  });
}

module.exports = {
  overviews: overviews,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('ReportOverview', overviews, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ReportOverview', null, {});
  }
};
