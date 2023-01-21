const uuid = require('uuid');
const { faker } = require('@faker-js/faker');
const allBrands = require('./brand_model_generation.json');
const engines = require('./20211106100215-seed-engine');
const locations = require('./20211105194523-seed-location');

const driveTypes = ['AWD', '4WD', 'FWD', 'RWD'];
const transmissionTypes = ['Manual', 'Automatic', 'CVT', 'DCT'];
const cars = [];

for (let i = 0; i < 20; i++) {
  const randomBrand = allBrands[randomInteger(0, allBrands.length)];
  const randomModel = randomBrand.models[randomInteger(0, randomBrand.models.length)];
  const randomGeneration = randomBrand.generations
    ? randomBrand.generations[randomInteger(0, randomBrand.generations.length)]
    : null;

  cars.push({
    id: uuid.v4(),
    type: faker.vehicle.type(),
    color: faker.vehicle.color(),
    vin: faker.vehicle.vin(),
    registrationNumber: faker.vehicle.vrm(),
    description: faker.lorem.paragraph(),
    mileage: randomInteger(0, 500) * 500,
    year: randomInteger(2005, 2020),
    drive: driveTypes[randomInteger(0, driveTypes.length - 1)],
    transmission: transmissionTypes[randomInteger(0, transmissionTypes.length - 1)],
    market_name: faker.company.name(),
    marketplace_link: faker.internet.url(),
    price: randomInteger(0, 500) * 100,
    brand_id: randomBrand.brand_id,
    model_id: randomModel.model_id,
    generation_id: randomGeneration.generation_id,
    engine_id: engines.engines[randomInteger(0, engines.engines.length - 1)].id,
    location_id: locations.locations[randomInteger(0, locations.locations.length - 1)].id,
    mainImage: 'https://picsum.photos/600/400',
    images: ['https://picsum.photos/600/400', 'https://picsum.photos/400/600', 'https://picsum.photos/800/600'],
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  cars: cars,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Car', cars, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Car', null, {});
  }
};
