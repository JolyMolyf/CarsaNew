import { CarSelectorType } from '../../types/carSelector';
import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class CarSelector extends Model<CarSelectorType> implements CarSelectorType {
    person_id!: string;

    static associate(models: any) {
      CarSelector.belongsTo(models.Employee, {
        foreignKey: 'person_id',
        onDelete: 'CASCADE',
        hooks: true
      });

      CarSelector.hasMany(models.Order, {
        foreignKey: 'selector_id'
      });
    }
  }

  CarSelector.init(
    {
      person_id: {
        type: DataTypes.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Employee',
          key: 'person_id'
        }
      }
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'CarSelector',
      freezeTableName: true,
      createdAt: 'creationDate',
      updatedAt: false
    }
  );

  return CarSelector;
};
