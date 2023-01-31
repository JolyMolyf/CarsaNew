import sequelize from 'sequelize';
import db from '../../database/models';
import Logger from '../../logger';

const getEmployeesPosition = async (person_id: string) => {
  const carSelectors = await getAllCarSelectors();
  const technicians = await getAllTechnicians();
  const managers = await db.Manager.findAll();
  const technician = technicians.find((technician) => {
    return technician.Employee.person_id == person_id;
  });
  const carSelector = carSelectors.find((carSelector) => carSelector.Employee.person_id == person_id);
  const manager = managers.find((manager) => manager.person_id == person_id);
  if (technician) return 'Technician';
  if (carSelector) return 'CarSelector';
  if (manager) return 'Manager';
};

const getAllCarSelectors = async () => {
  const carSelectors = await db.CarSelector.findAll({
    attributes: [
      [sequelize.col('Employee.Person.id'), 'id'],
      [sequelize.col('Employee.Person.first_name'), 'first_name'],
      [sequelize.col('Employee.Person.last_name'), 'last_name'],
      [sequelize.col('Employee.email'), 'email']
    ],
    include: [{ model: db.Employee, include: [db.Person] }]
  });
  return carSelectors;
};

const getAllTechnicians = async () => {
  const technicians = await db.Technician.findAll({
    attributes: [
      [sequelize.col('Employee.Person.id'), 'id'],
      [sequelize.col('Employee.Person.first_name'), 'first_name'],
      [sequelize.col('Employee.Person.last_name'), 'last_name'],
      [sequelize.col('Employee.email'), 'email']
    ],
    include: [{ model: db.Employee, include: [db.Person] }]
  });

  return technicians;
};

const getTechnicianById = async (technicianId: string) => {
  return await db.Technician.findByPk(technicianId, {
    include: [db.Location]
  });
};

const createEmployee = async (user: any, role: string) => {
  const employee = await db.Employee.create(user);
  if (role === 'Technician') {
    const technican = await db.Technician.create({ person_id: employee.person_id, location_id: user.location });
    return technican;
  }

  if (role === 'Selector') {
    const carSelctor = await db.CarSelector.create({ person_id: employee.person_id });
    return carSelctor;
  }
};

const getEmployeeByEmail = async (email: string) => {
  const employee = await db.Employee.findOne({
    include: [db.Person],
    attributes: [
      [sequelize.col('Person.id'), 'person_id'],
      [sequelize.col('Person.first_name'), 'first_name'],
      [sequelize.col('Person.last_name'), 'last_name'],
      'email',
      'password'
    ],
    where: { email },
    raw: true,
    nest: true
  }).catch((e: any) => {
    Logger.error(`Error occurred: ${e}`);
  });

  if (employee) {
    const position = await getEmployeesPosition(employee.person_id);
    employee.role = position;
  }

  return employee;
};

export default {
  getEmployeeByEmail,
  getTechnicianById,
  createEmployee,
  getAllTechnicians,
  getAllCarSelectors
};
