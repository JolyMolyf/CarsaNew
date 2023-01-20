import express from 'express';
import userController from '../controllers/userController';
import { requireAuthentication } from '../middleware/requireAuthentication';
import { useRegistrationSchema, useLoginSchema } from '../schemas/authSchema';
import { validateRequestSchema } from '../middleware/validateRequestSchema';

const router = express.Router();

router.put('', userController.updateUserRole);
router.delete('', userController.deleteUser);

export default router;
