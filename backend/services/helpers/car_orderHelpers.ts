import db from '../../database/models';
import moment from 'moment';

const createCarOrderLink = async (car_id: string, order_id: string) => {
  return await db.Car_Order.create({
    order_id,
    car_id,
    start_reservation: moment().toISOString(),
    status: 'Reserved'
  });
};

const getCarOrderByOrderIdAndCarId = async (order_id: Array<string>, car_id: string) => {
  return await db.Car_Order.findAll({
    where: {
      order_id,
      car_id
    }
  });
};

const updateCarOrderLink = async (carOrderLink: any) => {
  const fetchedCarOrderLink = await db.Car_Order.findOne({
    where: {
      car_id: carOrderLink.car_id,
      order_id: carOrderLink.order_id
    }
  });
  return await fetchedCarOrderLink.update(carOrderLink);
};

export default {
  createCarOrderLink,
  getCarOrderByOrderIdAndCarId,
  updateCarOrderLink
};
