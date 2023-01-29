const engines = [
  {
    id: '510afbb0-dd12-40b1-b9df-9f2a878eb0a9', // Engine 1
    name: 'V6 DOHC',
    volume: 3500,
    power: 268,
    fuel_type: 'Benzyna'
  },
  {
    id: '6e8acff5-132c-4115-bc71-f365d26bec60', // Engine 2
    name: 'TDI',
    volume: 2000,
    power: 140,
    fuel_type: 'Diesel'
  },
  {
    id: '411ed280-0d10-47dd-83d4-166944893690', // Engine 3
    name: 'R135',
    volume: null,
    power: 135,
    fuel_type: 'Elektryczny'
  },
  {
    id: 'bd82a965-d949-4d49-86af-f41c888960f6', // Engine 4
    name: 'TFSI',
    volume: 2000,
    power: 150,
    fuel_type: 'Benzyna'
  },
  {
    id: 'd974b49d-4102-4072-827a-ebe6a8dde3a4', // Engine 5
    name: '2ZR-FXE I4 VVT-i',
    volume: 1800,
    power: 98,
    fuel_type: 'Hybryda'
  },
  {
    id: 'ebcc8287-1eef-48ae-8e3f-0e53ff103c6a', // Engine 6
    name: 'K24A I4',
    volume: 2400,
    power: 190,
    fuel_type: 'Benzyna'
  },
  {
    id: 'f36ce6db-8bd1-4f53-85f6-5d94dcfe2770', // Engine 7
    name: 'Nissan VR30DDTT',
    volume: 3000,
    power: 405,
    fuel_type: 'Benzyna'
  },
  {
    id: '44630e2c-7cdb-4338-b87b-c9c667390df5', // Engine 8
    name: '3.0-liter EcoBoost V6',
    volume: 3000,
    power: 457,
    fuel_type: 'Benzyna'
  }
];

module.exports = {
  engines: engines,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Engine', engines, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Engine', null, {});
  }
};
