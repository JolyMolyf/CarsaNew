import { Router } from 'express';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { validateReportId } from '../schemas/reportSchema';
import { validateRequestSchema } from '../middleware/validateRequestSchema';
import reportsController from '../controllers/reportController';

const multer = require('multer');
const router = Router();

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'uploads');
  },
  filename: function (_req, file, cb) {
    cb(null, uuid() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);

    if (!['.png', '.jpg', '.jpeg', '.gif'].includes(ext)) {
      return callback(new Error('Only images are allowed'));
    }
    callback(null, true);
  }
});

router.delete('/:reportId', validateReportId, validateRequestSchema, reportsController.deleteReport);
router.get('/car/:car_id', reportsController.getAllReportForCar);
router.post('/save', reportsController.saveAndUpdateReports);
router.put('/update', reportsController.updateSingleReport);

router.post(
  '/:reportId/images',
  validateReportId,
  validateRequestSchema,
  upload.array('images', 6),
  reportsController.uploadReportImages
);

export default router;
