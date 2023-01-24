import { Model } from 'sequelize';
import { PersonType, PersonRoles } from '../../types/person';

module.exports = (sequelize: any, DataTypes: any) => {
  class Person extends Model<PersonType> implements PersonType {
    id!: string;
    first_name!: string;
    last_name!: string;
    roles!: Array<string>;

    static associate(models: any) {
      Person.hasOne(models.Client, {
        foreignKey: 'person_id',
        onDelete: 'CASCADE',
        hooks: true
      });

      Person.hasOne(models.Employee, {
        foreignKey: 'person_id',
        onDelete: 'CASCADE',
        hooks: true
      });
    }
  }

  Person.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      first_name: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          isAlpha: {
            msg: 'Must contain only alphabetical characters'
          },
          len: {
            args: [2, 60],
            msg: 'Must be in the range of 2-60'
          }
        }
      },
      last_name: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          isAlpha: {
            msg: 'Must contain only alphabetical characters'
          },
          len: {
            args: [2, 60],
            msg: 'Must be in the range of 2-60'
          }
        }
      },
      roles: {
        type: DataTypes.ARRAY(
          DataTypes.ENUM({
            values: Object.keys(PersonRoles).filter((v) => isNaN(Number(v)))
          })
        ),
        allowNull: false,
        defaultValue: []
      }
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: 'Person',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false
    }
  );

  return Person;
};
