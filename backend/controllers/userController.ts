import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userHelpers from '../services/helpers/userHelpers';

const updateUserRole = async (req: Request, res: Response) => {
  const user = req.body;
  if (user.role) {
    const response = await userHelpers.updateUserRole(user);
    res.json(response);
  } else {
    res.json({ Status: StatusCodes.ACCEPTED, message: 'Nothing changed in user role' });
  }
};

const deleteUser = () => {};

export default {
  updateUserRole,
  deleteUser
};
