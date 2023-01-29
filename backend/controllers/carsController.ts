import e, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import carHelpers from '../services/helpers/carHelpers';
import car_orderHelpers from '../services/helpers/car_orderHelpers';
import employeeHelper from '../services/helpers/employeeHelper';
import orderHelpers from '../services/helpers/orderHelpers';
import { scrapOtoCar } from '../services/utils/scrapper';

const getAllBrands = async (req: Request, res: Response) => {
  res.json(await carHelpers.getAllBrands());
};

const getAllModels = async (req: Request, res: Response) => {
  const brandName = req.query.name;
  const brand = await carHelpers.getBrandByName((brandName as string) || '');
  if (brand) {
    const models = await carHelpers.getAllModels(brand[0].id);
    res.json(models);
  } else {
    res.json({ status: 'failed' });
  }
};

const getAllGeneratioins = async (req: Request, res: Response) => {
  const modelName = req.query.name;
  const model = await carHelpers.getModelByName((modelName as string) || '');
  const generations = await carHelpers.getAllGenerations(model[0].id || '');
  res.json(generations);
};

const getAllCars = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || undefined;
  const offset = Number(req.query.offset) || undefined;
  const cars = await carHelpers.getAllCars({ limit, offset });
  return res.json(cars);
};

const getCarStatusForOrder = async (req: Request, res: Response) => {
  const carId = req.params.carId;
  const orderId = req.params.orderId;

  const result = await carHelpers.getCarStatusForOrder(carId, orderId);

  return result.success ? res.json(result.data) : res.status(StatusCodes.BAD_REQUEST).json({ message: result.message });
};

const getCarsForTechnician = async (req: Request, res: Response) => {
  const technicianId = req.params.id;
  const technician = await employeeHelper.getTechnicianById(technicianId);
  const cars = await carHelpers.getAllCarsByLocationState(technician.Location.state);
  res.json({ cars: [...cars] });
};

const getClientCars = async (req: Request, res: Response) => {
  const client_id = req.params.clientId;
  const orders = await orderHelpers.getAllOrdersForClient(client_id);

  const cars = orders.map((order) => {
    if (order.car_order.length !== 0) {
      return [...order.car_order];
    } else {
      return;
    }
  });

  return res.json(cars.flat(1).filter((car) => car != null));
};

const getCarById = async (req: Request, res: Response) => {
  const carId = req.params.carId;

  const result = await carHelpers.getCarById(carId);
  return result.success ? res.json(result.car) : res.status(StatusCodes.BAD_REQUEST).json({ message: result.message });
};

const createCar = async (req: Request, res: Response) => {
  const carBody = req.body;
  const result = await carHelpers.createCar(carBody);
  return result.success ? res.json(result.car) : res.status(StatusCodes.BAD_REQUEST).json({ message: result.message });
};

const updateCarById = async (req: Request, res: Response) => {
  const carId = req.params.carId;
  const carBody = req.body;
  const result = await carHelpers.updateCarById(carId, carBody);

  return result.success ? res.json(result.car) : res.status(StatusCodes.BAD_REQUEST).json({ message: result.message });
};

const deleteCarById = async (req: Request, res: Response) => {
  const carId = req.params.carId;

  const result = await carHelpers.deleteCarById(carId);

  return result.success
    ? res.sendStatus(StatusCodes.OK)
    : res.status(StatusCodes.BAD_REQUEST).json({ message: result.message });
};

const scrapCar = async (req: Request, res: Response) => {
  const scrapLink = req.query.link;
  const scrappedCar = await scrapOtoCar(scrapLink?.toString() || '');
  res.json(scrappedCar);
};

const buyCar = async (req: Request, res: Response) => {
  const body = req.body;
  const orders = await orderHelpers.getAllOrdersForClient(body.user_id);
  const order_ids = orders.map((order) => order.id);
  const car_orders = await car_orderHelpers.getCarOrderByOrderIdAndCarId(order_ids, req.body.carid);
  if (car_orders.length === 0) {
    const car = await carHelpers.getCarById(req.body.carid);
    const selectors = await employeeHelper.getAllCarSelectors();
    const createdOrder = await orderHelpers.createOrder({
      order: {
        status: 'Created',
        type: 'Single_Car',
        client_id: body.user_id,
        selector_id: selectors[0].person_id,
        sum: 200
      }
    });
    const createdOrderId = createdOrder.id;
    const carOrderLink = await car_orderHelpers.createCarOrderLink(car.car.id, createdOrderId || '');
  } else {
    car_orders.forEach((link) => {
      car_orderHelpers.updateCarOrderLink({
        car_id: link.car_id,
        order_id: link.order_id,
        start_reservarion: link.start_reservarion,
        status: 'Bought'
      });
    });
  }

  res.json({ success: true });
};

const rejectCar = async (req: Request, res: Response) => {
  const body = req.body;
  const orders = await orderHelpers.getAllOrdersForClient(body.user_id);
  const order_ids = orders.map((order) => order.id);
  const car_orders = await car_orderHelpers.getCarOrderByOrderIdAndCarId(order_ids, req.body.carid);
  car_orders.forEach((link) => {
    car_orderHelpers.updateCarOrderLink({
      car_id: link.car_id,
      order_id: link.order_id,
      start_reservarion: link.start_reservarion,
      status: 'Rejected'
    });
  });
  res.json({ success: true });
};

const getBoughtCarsByClientId = async (req: Request, res: Response) => {
  const client_id = req.params.clientId;
  const orders = await orderHelpers.getAllOrdersForClient(client_id);

  const cars = orders.map((order) => {
    if (order.car_order.length !== 0) {
      const carsToReturn = order.car_order.filter((car) => order.car_order?.[0]?.Car_Order?.status === 'Bought');
      return [...carsToReturn];
    } else {
      return;
    }
  });

  return res.json(cars.flat(1).filter((car) => car != null));
};

const getRejectedCarsByClientId = async (req: Request, res: Response) => {
  const client_id = req.params.clientId;
  const orders = await orderHelpers.getAllOrdersForClient(client_id);

  const cars = orders.map((order) => {
    if (order.car_order.length !== 0) {
      const carsToReturn = order.car_order.filter((car) => order.car_order?.[0]?.Car_Order?.status === 'Rejected');
      return [...carsToReturn];
    } else {
      return;
    }
  });

  return res.json(cars.flat(1).filter((car) => car != null));
};

const getAllRejectedCars = async (req: Request, res: Response) => {
  const rejectedCars = await carHelpers.getRejectedCars();
  res.json({ success: true, rejectedCars });
};

export default {
  getCarById,
  getAllCars,
  getCarStatusForOrder,
  getClientCars,
  getAllRejectedCars,
  getBoughtCarsByClientId,
  getRejectedCarsByClientId,
  getCarsForTechnician,

  buyCar,
  rejectCar,

  getAllBrands,
  getAllModels,
  getAllGeneratioins,

  createCar,
  updateCarById,
  deleteCarById,
  scrapCar
};
