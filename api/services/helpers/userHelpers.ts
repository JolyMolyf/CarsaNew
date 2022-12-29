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
  const clients = await db.Client.findAll({include: [db.Person]});
  const selectors = await db.CarSelector.findAll({include: [{model: db.Employee, include: [db.Person]}]})
  const technicians = await db.Technician.findAll({include: [{model: db.Employee, include: [db.Person]}]})
  return [...clients, ...technicians, ...selectors];
}

export default {
  getSelectorDataById,
  getClientDataById,
  getAllUsers
};
