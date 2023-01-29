const { faker } = require('@faker-js/faker');
const cars = require('./20211106103041-seed-car');
const orders = require('./20211106160000-seed-order');

const records = [];

const singleCarOrders = orders.orders.filter((order) => order.type === 'Single_Car');
const configurationOrders = orders.orders.filter((order) => order.type === 'Configuration');
const carsCopy = [...cars.cars].sort(() => Math.random() - 0.5);

singleCarOrders.forEach((order, i) => {
  records.push({
    order_id: order.id,
    car_id: carsCopy[i].id,
    start_reservation: faker.date.recent(),
    status: 'Rejected'
  });
});

configurationOrders.forEach((order) => {
  records.push({
    order_id: order.id,
    car_id: carsCopy.pop().id,
    start_reservation: faker.date.recent(),
    status: 'Expired'
  });

  records.push({
    order_id: order.id,
    car_id: carsCopy.pop().id,
    start_reservation: faker.date.recent(),
    status: 'Reserved'
  });
});

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Car_Order', records, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Car_Order', null, {});
  }
};
