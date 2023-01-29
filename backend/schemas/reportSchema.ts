import { param } from 'express-validator';
import db from '../database/models';

export const validateReportId = [
    param('reportId')
        .trim()
        .isUUID(4).bail().withMessage('Report id should be a valid UUID v4')
        .custom(async (reportId) => {
            const existingReport = await db.Report.findByPk(reportId);
            return existingReport ? Promise.resolve() : Promise.reject("Report with provided id doesn't exist");
        }).bail()
];
