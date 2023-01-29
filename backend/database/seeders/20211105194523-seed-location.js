const locations = [
  {
    id: '26096f88-10e3-4196-a9e7-10c50ddf129b', // Location 1
    country: 'Polska',
    state: 'Mazowieckie',
    city: 'Warszawa',
    postal_code: '02-008',
    street: 'Koszykowa'
  },
  {
    id: '89d86597-1193-4f13-acfe-eedd7f7aaf0c', // Location 2
    country: 'Polska',
    state: 'Mazowieckie',
    city: 'Warszawa',
    postal_code: '00-020',
    street: 'Chmielna'
  },
  {
    id: 'df59d88d-8b77-4848-838e-354dd6bc4a2d', // Location 3
    country: 'Polska',
    state: 'Mazowieckie',
    city: 'Warszawa',
    postal_code: '01-934',
    street: 'Opalin'
  },
  {
    id: '964a74b3-6054-45fa-aded-9f02ab94cc98', // Location 4
    country: 'Polska',
    state: 'Mazowieckie',
    city: 'Warszawa',
    postal_code: '03-663',
    street: 'Kanałowa'
  },
  {
    id: 'caf5c55c-e15a-426d-992b-8347db3ce272', // Location 5
    country: 'Polska',
    state: 'Lubelskie',
    city: 'Lublin',
    postal_code: '20-914',
    street: 'Spokojna'
  },
  {
    id: 'fc6b9c8f-1436-42e6-9881-18b93f5cea84', // Location 6
    country: 'Polska',
    state: 'Małopolskie',
    city: 'Kraków',
    postal_code: '30-017',
    street: 'Racławicka'
  },
  {
    id: '68897953-6724-434d-a961-5a7ca03954bb', // Location 7
    country: 'Polska',
    state: 'Opolskie',
    city: 'Opole',
    postal_code: '45-082',
    street: 'Piastowska'
  },
  {
    id: '4b797ce4-5e0b-4f93-87c2-1554c67eb104', // Location 8
    country: 'Polska',
    state: 'Pomorskie',
    city: 'Gdańsk',
    postal_code: '80-810',
    street: 'Okopowa'
  },
  {
    id: 'fe2717a0-045e-49ef-a7cf-c151a7275527', // Location 9
    country: 'Polska',
    state: 'Wielkopolskie',
    city: 'Poznań',
    postal_code: '61-713',
    street: 'Al. Niepodległości'
  }
];

module.exports = {
  locations: locations,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Location', locations, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Location', null, {});
  }
};
