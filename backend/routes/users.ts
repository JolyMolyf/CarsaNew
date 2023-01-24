import express from 'express';
import userController from '../controllers/userController';
import { validateUserId } from '../schemas/userSchema';
import { validateRequestSchema } from '../middleware/validateRequestSchema';

const router = express.Router();

router.put('', userController.updateUserRole);

router.delete('/:userId', validateUserId, validateRequestSchema, userController.deleteUser);

router.get('/:userId/roles', validateUserId, validateRequestSchema, userController.getUserRoles);

export default router;
