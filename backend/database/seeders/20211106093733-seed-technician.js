const technicians = [
  {
    person_id: 'c060b776-0d38-421b-98b0-420c14186826', // Technician 1
    location_id: '26096f88-10e3-4196-a9e7-10c50ddf129b', // Location 1
    creationDate: new Date()
  },
  {
    person_id: '9f94659a-7bf2-41a7-abe5-0209609d5d51', // Technician 2
    location_id: '89d86597-1193-4f13-acfe-eedd7f7aaf0c', // Location 2
    creationDate: new Date()
  },
  {
    person_id: '86cc3f1f-efe0-481a-956f-655432cce053', // Technician 3
    location_id: 'caf5c55c-e15a-426d-992b-8347db3ce272', // Location 5
    creationDate: new Date()
  },
  {
    person_id: 'e7286593-b2e4-4d4c-81d0-1efa6cf22ffc', // Technician 4
    location_id: 'fe2717a0-045e-49ef-a7cf-c151a7275527', // Location 9
    creationDate: new Date()
  }
];

module.exports = {
  technicians: technicians,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Technician', technicians, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Technician', null, {});
  }
};
