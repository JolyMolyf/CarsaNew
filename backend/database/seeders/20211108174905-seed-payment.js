const uuid = require('uuid');
const orders = require('./20211106160000-seed-order');

const payments = [];

for (let i = 0; i < orders.orders.length; i++) {
  payments.push({
    id: uuid.v4(),
    date: orders.orders[i].date,
    amount: orders.orders[i].sum,
    order_id: orders.orders[i].id
  });
}

module.exports = {
  payments: payments,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Payment', payments, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Payment', null, {});
  }
};
