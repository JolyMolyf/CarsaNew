const data = require('./brand_model_generation.json');

const brands = data.map((brand) => {
  return {
    id: brand.brand_id,
    name: brand.brand_name
  };
});

module.exports = {
  brands: brands,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('CarBrand', brands, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('CarBrand', null, {});
  }
};
