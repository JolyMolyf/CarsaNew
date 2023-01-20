import { Request, Response } from 'express';
import { getAllLocations } from '../services/helpers/locationHelper';

const getAllExistingLocations = async (req: Request, res: Response) => {
  const locations = await getAllLocations();
  res.json(locations);
};

export default {
  getAllExistingLocations
};
