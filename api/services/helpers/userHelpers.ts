import e from 'express';
import sequelize from 'sequelize';
import { uuid } from '../../../client_app/src/utils/helpers/uuid';
import db from '../../../database/models';
import clientHelpers from './clientHelpers';
import employeeHelper from './employeeHelper';

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
    attributes: ['person_id', 'Person.first_name', 'Person.last_name', 'email', 'phone', 'password'],
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
  const clients:Array<any> = await clientHelpers.getAllClients();
  const selectors:Array<any> = await employeeHelper.getAllCarSelectors();
  const technicians:Array<any> = await employeeHelper.getAllTechnicians();

  return {clients, technicians, selectors};
}

const updateUserRole = async (user:any) => {
  if ( ['Technician', 'Selector'].includes(user.role) ) {
    const client = await getClientDataById(user.id);
    console.log('Client:  : : ', client);
    await db.Client.destroy({ where: { person_id: client.person_id }});
    
    const employee =  await employeeHelper.createEmployee({...user, person_id: client.person_id, password: client.password}, user.role || 'Selector');
    return(employee);
  } 
}

export default {
  getSelectorDataById,
  getClientDataById,
  getAllUsers,

  updateUserRole,
};
