const locations = require('./20211105194523-seed-location');
const employees = require('./20211106091456-seed-employee');

const technicians = [];

for (let i = 6; i < 11; i++) {
  technicians.push({
    person_id: employees.employees[i].person_id,
    location_id: locations.locations[randomInteger(0, locations.locations.length - 1)].id,
    creationDate: new Date()
  });
}

technicians.push({
  person_id: 'c060b776-0d38-421b-98b0-420c14186826',
  location_id: '26096f88-10e3-4196-a9e7-10c50ddf129b',
  creationDate: new Date()
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  technicians: technicians,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Technician', technicians, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Technician', null, {});
  }
};
