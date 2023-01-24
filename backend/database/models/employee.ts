const { Model } = require('sequelize');
import { EmployeeType } from '../../types/employee';

module.exports = (sequelize: unknown, DataTypes: any) => {
  class Employee extends Model<EmployeeType> implements EmployeeType {
    person_id!: string;
    email!: string;
    password!: string;

    static associate(models: any) {
      Employee.belongsTo(models.Person, {
        foreignKey: 'person_id'
      });

      Employee.hasOne(models.CarSelector, {
        foreignKey: 'person_id',
        onDelete: 'CASCADE',
        hooks: true
      });

      Employee.hasOne(models.Technician, {
        foreignKey: 'person_id',
        onDelete: 'CASCADE',
        hooks: true
      });
    }
  }

  Employee.init(
    {
      person_id: {
        type: DataTypes.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Person',
          key: 'id'
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Email is not valid'
          }
        }
      },
      password: {
        type: DataTypes.STRING(80),
        allowNull: false
      }
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'Employee',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false
    }
  );

  return Employee;
};
