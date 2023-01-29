const { faker } = require('@faker-js/faker');

const orders = [
  {
    id: '7b7e1af1-2146-4330-86df-f1738872dfec', // Order 1
    type: 'Single_Car',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: '6076dae1-73be-4c93-be95-a536584ded40', // Client 1
    selector_id: null,
    sum: 200
  },
  {
    id: 'c4730c0b-41d7-4bc2-be0d-93c932ff8948', // Order 2
    type: 'Single_Car',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: '1b1467d7-19ae-471c-93ae-f12d69cee1bc', // Client 2
    selector_id: null,
    sum: 200
  },
  {
    id: 'b473cf1c-df4d-4298-ba97-1bf540f3091b', // Order 3
    type: 'Single_Car',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: '03f1a656-3f13-417a-acc0-2352fe092165', // Client 3
    selector_id: null,
    sum: 200
  },
  {
    id: 'e6d87d8e-4d41-41ab-8adb-fb47cce7d03c', // Order 4
    type: 'Single_Car',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: 'ebf38dcc-87db-4927-b6e3-c4a1217f5e99', // Client 4
    selector_id: null,
    sum: 200
  },
  {
    id: '0a7fa417-056c-4402-a3a8-ba6f460c736b', // Order 5
    type: 'Single_Car',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: 'bca2c536-cbd3-4ba2-b658-8ab110c0a991', // Client 5
    selector_id: null,
    sum: 200
  },
  {
    id: 'f149ca90-80e0-4140-9d8b-49bdad780d71', // Order 6
    type: 'Single_Car',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: '1088d9ed-20cd-41e6-99f0-f396b714f572', // Client 6
    selector_id: null,
    sum: 200
  },
  {
    id: '2877b81c-d317-4cb0-b23d-f9960973895d', // Order 7
    type: 'Single_Car',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: '3fa890b5-0985-4d88-a38a-8c684b52bae0', // Client 7
    selector_id: null,
    sum: 200
  },
  {
    id: '7e574b0b-768f-4737-8af5-68c1bf0ebe56', // Order 8
    type: 'Single_Car',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: '7d03a5d4-11f6-4228-8fc5-9eb63154c21f', // Client 8
    selector_id: null,
    sum: 200
  },
  {
    id: 'c82b3129-95a2-40a9-b6e2-86ddfddf33f5', // Order 9
    type: 'Configuration',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: '6076dae1-73be-4c93-be95-a536584ded40', // Client 1
    selector_id: '632fb1d9-2ee6-4eea-aefb-24dbe3468c42', // CarSelector 1
    sum: 800
  },
  {
    id: '0d58df13-462d-495f-99c2-34503b07bec1', // Order 10
    type: 'Configuration',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: '1b1467d7-19ae-471c-93ae-f12d69cee1bc', // Client 2
    selector_id: '81c1dfcc-f224-47f2-95a8-3a4105411c75', // CarSelector 2
    sum: 800
  },
  {
    id: '61299f97-d806-4718-ad0c-c12ae507de15', // Order 11
    type: 'Configuration',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: '03f1a656-3f13-417a-acc0-2352fe092165', // Client 3
    selector_id: '632fb1d9-2ee6-4eea-aefb-24dbe3468c42', // CarSelector 1
    sum: 800
  },
  {
    id: 'fa7e88c5-bd0c-4790-9009-6fea500a36c1', // Order 12
    type: 'Configuration',
    status: 'Paid',
    date: faker.date.recent(),
    client_id: 'ebf38dcc-87db-4927-b6e3-c4a1217f5e99', // Client 4
    selector_id: '81c1dfcc-f224-47f2-95a8-3a4105411c75', // CarSelector 2
    sum: 800
  }
];

module.exports = {
  orders: orders,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Order', orders, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Order', null, {});
  }
};
