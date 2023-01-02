import sequelize from 'sequelize';
import db from '../../../database/models';

const getSelectorDataById = async (selectorId: string) => {
  const selector = await db.CarSelector.findByPk(selectorId, {
    attributes: ['person_id', 'Employee.Person.first_name', 'Employee.Person.last_name', 'Employee.email'],
    include: [
      {
        model: db.Employee,
        attributes: [],
        include: {
          model: db.Person,
          attributes: []
        }
      }
    ],
    raw: true,
    nest: true
  });

  return selector;
};

const getClientDataById = async (clientId: string) => {
  const selector = await db.Client.findByPk(clientId, {
    attributes: ['person_id', 'Person.first_name', 'Person.last_name', 'email', 'phone'],
    include: [
      {
        model: db.Person,
        attributes: []
      }
    ],
    raw: true,
    nest: true
  });

  return selector;
};

const getAllUsers = async () => {
  const clients:Array<any> = await db.Client.findAll({ 
    attributes: [
      [sequelize.col('Person.id'), 'id'],
      [sequelize.col('Person.first_name'), 'first_name'],
      [sequelize.col('Person.last_name'), 'last_name'],
      'email',
    ], 
    include: [db.Person]
  })

  const selectors:Array<any> = await db.CarSelector.findAll({
    attributes:  [
      [sequelize.col('Employee.Person.id'), 'id'],
      [sequelize.col('Employee.Person.first_name'), 'first_name'],
      [sequelize.col('Employee.Person.last_name'), 'last_name'],
      [sequelize.col('Employee.email'), 'email'],
    ],
    include: [{model: db.Employee, include: [db.Person]}]})
  const technicians:Array<any> = await db.Technician.findAll({ 
    attributes:  [
      [sequelize.col('Employee.Person.id'), 'id'],
      [sequelize.col('Employee.Person.first_name'), 'first_name'],
      [sequelize.col('Employee.Person.last_name'), 'last_name'],
      [sequelize.col('Employee.email'), 'email'],
    ],
    include: [{model: db.Employee, include: [db.Person]}]})
  return {clients, technicians, selectors};
}

export default {
  getSelectorDataById,
  getClientDataById,
  getAllUsers
};
