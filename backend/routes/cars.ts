import { Router } from 'express';
import carsController from '../controllers/carsController';
import { validateCarId, validateCreateCar } from '../schemas/carSchema';
import { validateOrderId } from '../schemas/orderSchema';
import { validateRequestSchema } from '../middleware/validateRequestSchema';

const router = Router();

router.get('/brands', carsController.getAllBrands);

router.get('/models', carsController.getAllModels);

router.get('/generations', carsController.getAllGeneratioins);

router.get('/list', carsController.getAllCars);

router.get('/rejected', carsController.getAllRejectedCars);

router.get('/scrap', carsController.scrapCar);

router.get('/getclientcars/:clientId', carsController.getClientCars);

router.get('/getclientcars/bought/:clientId', carsController.getBoughtCarsByClientId);

router.get('/getclientcars/rejected/:clientId', carsController.getRejectedCarsByClientId);

router.get('/techniciancars/:id', carsController.getCarsForTechnician);

router.get('/:carId', validateCarId, validateRequestSchema, carsController.getCarById);

router.get(
  '/:carId/orders/:orderId/status',
  validateCarId,
  validateOrderId,
  validateRequestSchema,
  carsController.getCarStatusForOrder
);

router.post('/', validateCreateCar, validateRequestSchema, carsController.createCar);

router.put('/buy/:carId', carsController.buyCar);

router.put('/reject/:carId', carsController.rejectCar);

router.put('/:carId', validateCarId, carsController.updateCarById);

router.delete('/:carId', validateCarId, validateRequestSchema, carsController.deleteCarById);

export default router;
