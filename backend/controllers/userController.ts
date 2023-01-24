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

const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  const result = await userHelpers.deleteUserById(userId);

  return result.success
    ? res.sendStatus(StatusCodes.OK)
    : res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: result.message });
};

export default {
  updateUserRole,
  deleteUser
};
