const records = [
  {
    car_model_id: '9233be9e-5c35-4e93-8a97-2618ef45ab46', // Lexus ES
    engine_id: '510afbb0-dd12-40b1-b9df-9f2a878eb0a9' // Engine 1
  },
  {
    car_model_id: 'a96fb813-d729-4a22-bd93-5583f452b2a1', // Volkswagen Passat B7
    engine_id: '6e8acff5-132c-4115-bc71-f365d26bec60' // Engine 2
  },
  {
    car_model_id: '82126a98-0fa3-4b61-977b-c1d62cf2a128', // Renault Zoe
    engine_id: '411ed280-0d10-47dd-83d4-166944893690' // Engine 3
  },
  {
    car_model_id: 'ec76df74-8e48-46d2-9349-c54a123666a2', // Audi A4 B9
    engine_id: 'bd82a965-d949-4d49-86af-f41c888960f6' // Engine 4
  },
  {
    car_model_id: '11a0efdf-f329-450c-b22c-ab45e88d4147', // Toyota Prius IV
    engine_id: 'd974b49d-4102-4072-827a-ebe6a8dde3a4' // Engine 5
  },
  {
    car_model_id: '6501a5a6-1d6b-4290-9bb1-c541764c9f76', // Honda Accord VII
    engine_id: 'ebcc8287-1eef-48ae-8e3f-0e53ff103c6a' // Engine 6
  },
  {
    car_model_id: '3e34f931-f128-4d6e-84ed-33b2ac3fb190', // Infiniti Q60
    engine_id: 'f36ce6db-8bd1-4f53-85f6-5d94dcfe2770' // Engine 7
  },
  {
    car_model_id: 'a4444855-0f3e-4e78-ab33-1ecf73bc5c2c', // Ford Explorer
    engine_id: '44630e2c-7cdb-4338-b87b-c9c667390df5' // Engine 8
  }
];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('CarModel_Engine', records, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('CarModel_Engine', null, {});
  }
};
