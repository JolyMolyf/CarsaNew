'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Manager', {
      person_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Employee',
          key: 'person_id'
        }
      },
      creationDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Manager');
  }
};
