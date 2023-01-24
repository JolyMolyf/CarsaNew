import { Model } from 'sequelize';
import { TechnicianType } from '../../types/technician';

module.exports = (sequelize: any, DataTypes: any) => {
  class Technician extends Model<TechnicianType> implements TechnicianType {
    person_id!: string;
    location_id!: string;

    static associate(models: any) {
      Technician.belongsTo(models.Location, {
        foreignKey: 'location_id'
      });

      Technician.belongsTo(models.Employee, {
        foreignKey: 'person_id',
        onDelete: 'CASCADE',
        hooks: true
      });

      Technician.hasMany(models.ReportOverview, {
        foreignKey: 'technician_id'
      });
    }
  }

  Technician.init(
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
      },
      location_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Location',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'Technician',
      freezeTableName: true,
      createdAt: 'creationDate',
      updatedAt: false
    }
  );

  return Technician;
};
