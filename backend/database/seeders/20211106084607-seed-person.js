const people = [
  {
    id: '6076dae1-73be-4c93-be95-a536584ded40', // Client 1
    first_name: 'Magnus',
    last_name: 'Carlsen'
  },
  {
    id: '1b1467d7-19ae-471c-93ae-f12d69cee1bc', // Client 2
    first_name: 'Billy',
    last_name: 'Morse'
  },
  {
    id: '03f1a656-3f13-417a-acc0-2352fe092165', // Client 3
    first_name: 'Teresa',
    last_name: 'Lozano'
  },
  {
    id: 'ebf38dcc-87db-4927-b6e3-c4a1217f5e99', // Client 4
    first_name: 'Katie',
    last_name: 'Riley'
  },
  {
    id: 'bca2c536-cbd3-4ba2-b658-8ab110c0a991', // Client 5
    first_name: 'Lia',
    last_name: 'Goodman'
  },
  {
    id: '1088d9ed-20cd-41e6-99f0-f396b714f572', // Client 6
    first_name: 'Judy',
    last_name: 'Small'
  },
  {
    id: '3fa890b5-0985-4d88-a38a-8c684b52bae0', // Client 7
    first_name: 'Harry',
    last_name: 'Riggs'
  },
  {
    id: '7d03a5d4-11f6-4228-8fc5-9eb63154c21f', // Client 8
    first_name: 'Carlos',
    last_name: 'Peters'
  },
  {
    id: '632fb1d9-2ee6-4eea-aefb-24dbe3468c42', // CarSelector 1
    first_name: 'Charles',
    last_name: 'Darwin'
  },
  {
    id: '81c1dfcc-f224-47f2-95a8-3a4105411c75', // CarSelector 2
    first_name: 'Jada',
    last_name: 'Huffman'
  },
  {
    id: 'c060b776-0d38-421b-98b0-420c14186826', // Technician 1
    first_name: 'George',
    last_name: 'Orwell'
  },
  {
    id: '9f94659a-7bf2-41a7-abe5-0209609d5d51', // Technician 2
    first_name: 'Andrew',
    last_name: 'Zamora'
  },
  {
    id: '86cc3f1f-efe0-481a-956f-655432cce053', // Technician 3
    first_name: 'Sofia',
    last_name: 'Erickson'
  },
  {
    id: 'e7286593-b2e4-4d4c-81d0-1efa6cf22ffc', // Technician 4
    first_name: 'Nia',
    last_name: 'Fowler'
  },
  {
    id: '007231fb-c687-4c38-9cbd-cb3158c3ace7', // Manager 1
    first_name: 'John',
    last_name: 'Lennon'
  }
];

module.exports = {
  people: people,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Person', people, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Person', null, {});
  }
};
