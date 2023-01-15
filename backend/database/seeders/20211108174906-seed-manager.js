const employees = require('./20211106091456-seed-employee');

 const managers = [];


   managers.push({
     person_id: employees.employees[10].person_id,
     creationDate: new Date()
   });


 module.exports = {
   managers: managers,

   up: async (queryInterface) => {
     await queryInterface.bulkInsert('Manager', managers, {});
   },

   down: async (queryInterface) => {
     await queryInterface.bulkDelete('Manager', null, {});
   }
 };