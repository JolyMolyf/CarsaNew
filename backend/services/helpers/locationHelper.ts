import db from '../../database/models';
import { LocationType } from '../../types/location';

export const getAllLocations = async () => {
  return await db.Location.findAll();
};

export const getLocationById = async (id: string) => {
  return await db.Location.findByPk(id);
};

export const getLocationByState = async (location: string) => {
  const locationArray = location.split(',');
  const trimmedState: string = locationArray[locationArray.length - 1]?.replace('(Polska)', '');
  const locationFound = await db.Location.findAll({
    where: {
      state: trimmedState || 'Polska'
    }
  });

  if (locationFound.length === 0) {
    const polskaLocation = await db.Location.findAll({
      where: {
        country: 'Polska'
      }
    });

    if (polskaLocation.length === 0) {
      const createdLoaction = await createLocation(location);
      return createdLoaction;
    } else {
      return polskaLocation[0];
    }
  }

  return locationFound;
};

export const updateLocation = async (location: LocationType) => {
  const locationToUpdate = await getLocationById(location.id);
  return await locationToUpdate.update(location);
};

export const createLocation = async (location: any) => {
  const splitedLocation = location.split(',');
  const createdLocation = await db.Location.create({
    country: splitedLocation[location.length - 1] || 'Polska',
    street: 'street',
    state: splitedLocation[location.length - 2] || 'Mazowia',
    postal_code: '00000',
    city: 'Warszawa'
  });
  return createdLocation;
};
