const uuid = require('uuid');
const { faker } = require('@faker-js/faker');
const allBrands = require('./brand_model_generation.json');
const engines = require('./20211106100215-seed-engine');
const locations = require('./20211105194523-seed-location');

const driveTypes = ['AWD', '4WD', 'FWD', 'RWD'];
const transmissionTypes = ['Manual', 'Automatic'];
const cars = [];

for (let i = 0; i < 20; i++) {
  const randomBrand = allBrands[randomInteger(0, allBrands.length - 1)];
  const randomModel = randomBrand.models[randomInteger(0, randomBrand.models.length - 1)];
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
    generation_id: randomGeneration?.generation_id,
    engine_id: engines.engines[randomInteger(0, engines.engines.length - 1)].id,
    location_id: locations.locations[randomInteger(0, locations.locations.length - 1)].id,
    mainImage: 'https://picsum.photos/600/400',
    images: ['https://picsum.photos/600/400', 'https://picsum.photos/400/600', 'https://picsum.photos/800/600'],
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

cars.push({
  id: 'caf09ebc-418e-4272-a2f9-4ad1121dca0e',
  type: 'Sedan',
  color: 'Czarny',
  vin: null,
  registrationNumber: null,
  description: `Sprzedam audi A8 w wersji long w stanie idealnym. Auto serwisowane w AUDI Centrum Łódź, świeżo po przeglądzie technicznym i serwisowym. Wymienione tarcze i klocki hamulcowe.
  Pochodzenie auta - salon Polska, pierwszy właściciel.
  Auto garażowane, niepalący kierowca, użytkowane w większości po autostradach.
  Wnętrze zadbane, regularnie konserwowana skóra.
  Zapraszam do kontaktu.`,
  mileage: 284000,
  year: 2016,
  drive: driveTypes[1],
  transmission: transmissionTypes[1],
  market_name: 'OTOMOTO',
  marketplace_link: 'https://www.otomoto.pl/oferta/audi-a8-sprzedam-w-okazyjnej-cenie-ID6EVHhZ.html',
  price: 135000,
  brand_id: '165b6aa3-889e-4f7e-a343-166b1d0fecf1',
  model_id: '01331100-5c13-4a58-a78f-fb427b273754',
  generation_id: 'ec0a2808-2364-4ba3-9ada-2649d4735ed7',
  engine_id: engines.engines[randomInteger(0, engines.engines.length - 1)].id,
  location_id: '26096f88-10e3-4196-a9e7-10c50ddf129b',
  mainImage:
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImU3OGs0cWhybzVreTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.C4_DW-aFEaMnKMzoa269jDRrIRL23MlHks-s-hSWgF8/image;s=1080x720',
  images: [
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InI4Zm82czdsY3A1aTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.94T-2BNb1jR3PCe0W2HFCDgZH7jbqm3WxuGCQy84PXs/image;s=1080x720',
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjE4b2RxMXFmdnVobzMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.1XyFEnd9d61xMpolXPwolPFgnR5afGmpoc3Jf3014Gk/image;s=1080x720',
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijl5N2FsajI5N3M2NDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.K946YE6_odQ2yPJP4f9s0SFpLFKh304-0PwIolDygTU/image;s=1080x720',
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imphc2sxYmFoNnhkZDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.ToLLQjiAFfUZW_dycJAbxvaejAilVub-NRwar7momWc/image;s=1080x720'
  ],
  createdAt: new Date(),
  updatedAt: new Date()
});

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
