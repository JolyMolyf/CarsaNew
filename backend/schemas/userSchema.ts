import { param } from 'express-validator';

export const validateUserId = [
    param('userId')
        .trim()
        .isUUID(4).bail().withMessage('Brand id should be a valid UUID v4')
];
