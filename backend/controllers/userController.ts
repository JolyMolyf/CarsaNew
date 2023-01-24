import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userHelpers from '../services/helpers/userHelpers';

const getUserRoles = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  const result = await userHelpers.getUserRoles(userId);

  return result.success
    ? res.status(StatusCodes.OK).json(result.roles)
    : res.status(StatusCodes.BAD_REQUEST).json({ message: result.message });
};

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
  getUserRoles,
  updateUserRole,
  deleteUser
};
