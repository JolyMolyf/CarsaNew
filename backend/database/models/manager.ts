import { Model } from 'sequelize';
import { ManagerType } from '../../types/manager';

module.exports = (sequelize: any, DataTypes: any) => {
  class Manager extends Model<ManagerType> implements ManagerType {
    person_id!: string;

    static associate(models: any) {
      Manager.belongsTo(models.Employee, {
        foreignKey: 'person_id'
      });
    }
  }

  Manager.init(
    {
      person_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Employee',
          key: 'person_id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Manager',
      freezeTableName: true,
      createdAt: 'creationDate',
      updatedAt: false
    }
  );

  return Manager;
};
