import { Transaction } from 'sequelize';
import db from '../../database/models';
import Logger from '../../logger';
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
  const clients: Array<any> = await clientHelpers.getAllClients();
  const selectors: Array<any> = await employeeHelper.getAllCarSelectors();
  const technicians: Array<any> = await employeeHelper.getAllTechnicians();
  return { clients, technicians, selectors };
};

const updateUserRole = async (user: any) => {
  if (['Technician', 'Selector'].includes(user.role)) {
    const client = await getClientDataById(user.id);
    await db.Client.destroy({ where: { person_id: client.person_id } });

    const employee = await employeeHelper.createEmployee(
      { ...user, person_id: client.person_id, password: client.password },
      user.role || 'Selector'
    );
    return employee;
  }
};

const deleteTechnicianById = async (personId: any) => {
  await db.sequelize.transaction(async (transaction: Transaction) => {
    await db.ReportOverview.destroy(
      {
        where: {
          technician_id: personId
        }
      },
      { transaction, force: true }
    );

    await db.Technician.destroy(
      {
        where: {
          person_id: personId
        }
      },
      { transaction }
    );
  });
};

const deleteUserById = async (userId: any) => {
  try {
    let result;

    await db.sequelize.transaction(async (transaction: Transaction) => {
      // const userRoles = (await db.Person.findByPk(userId, { attributes: ['roles'], raw: true })).roles;

      await db.Person.destroy(
        {
          where: {
            id: userId
          }
        },
        { transaction }
      );
      // userRoles.forEach(async (role: any) => {
      //   switch (role) {
      //     case 'CLIENT':
      //       await db.Client.destroy(
      //         {
      //           where: {
      //             person_id: userId
      //           }
      //         },
      //         { transaction }
      //       );
      //     case 'SELECTOR':
      //       await db.CarSelector.destroy(
      //         {
      //           where: {
      //             person_id: userId
      //           }
      //         },
      //         { transaction }
      //       );
      //     case 'TECHNICIAN':
      //       await deleteTechnicianById(userId);
      //   }
      // });

      // if (userRoles.some((role) => ['SELECTOR', 'TECHNICIAN'].includes(role))) {
      //   await db.Employee.destroy(
      //     {
      //       where: {
      //         person_id: userId
      //       }
      //     },
      //     { transaction }
      //   );
      // }
    });

    return { success: true };
  } catch (err: any) {
    Logger.warn(err);
    return { success: false, message: err.message };
  }
};

export default {
  getSelectorDataById,
  getClientDataById,
  getAllUsers,
  updateUserRole,
  deleteUserById
};
