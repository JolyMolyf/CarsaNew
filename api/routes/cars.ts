import { Router } from 'express';
import carsController from '../controllers/carsController';
import { validateCarId, validateCreateCar, validateUpdateCar } from '../schemas/carSchema';
import { validateRequestSchema } from '../middleware/validateRequestSchema';

const router = Router();

router.get('/list', carsController.getAllCars);

router.get('/:carId', validateCarId, validateRequestSchema, carsController.getCarById);

router.post('/', validateCreateCar, validateRequestSchema, carsController.createCar);

router.put('/:carId', validateCarId, validateUpdateCar, validateRequestSchema, carsController.updateCarById);

router.delete('/:carId', validateCarId, validateRequestSchema, carsController.deleteCarById);

export default router;
