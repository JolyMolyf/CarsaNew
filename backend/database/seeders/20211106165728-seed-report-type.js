const reportTypes = [
  {
    id: '39bd9ea9-299d-4ba2-8eec-6684127515cb',
    name: 'Interior'
  },
  {
    id: '37273c38-8cd5-45e4-8ade-64f465ff9c4a',
    name: 'Exterior'
  },
  {
    id: 'db1dc92c-6dc2-41af-8a2d-c1ce7514e69e',
    name: 'Engine'
  },
  {
    id: '7e784861-52c9-4bf7-b12c-bba8538f5374',
    name: 'Suspension'
  },
  {
    id: '4d85de70-6bfb-42e0-85ae-e3dc3c6c0d64',
    name: 'Legal'
  },
  {
    id: '9d654c26-d919-462f-91e7-479c94f49c95',
    name: 'Transmission'
  }
];

module.exports = {
  reportTypes: reportTypes,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('ReportType', reportTypes, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ReportType', null, {});
  }
};
