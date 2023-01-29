export const convertScrappedDataToCar = (scrappedCar: any, link: string): any => {
  let drive;
  let transmission;
  let type = scrappedCar['Typ nadwozia'];
  if (scrappedCar['Napęd']?.toString()?.toLowerCase() === 'Naprzedniakola'.toLowerCase()) {
    drive = 'Na przednia kola';
  }
  if (scrappedCar['Napęd']?.toString()?.toLowerCase() === 'Natylnekola'.toLowerCase()) {
    drive = 'Na tylne kola';
  } else {
    drive = '4X4';
  }

  if (scrappedCar['Skrzynia biegów'] === 'Manualna') {
    transmission = 'Manualna';
  } else {
    transmission = 'Automatyczna';
  }

  const carToReturn = {
    mainImage: scrappedCar.images?.[0],
    images: scrappedCar.images,
    description: '',
    brand: '',
    model: '',
    generation: '',
    registrationNumber: scrappedCar['Numer rejestracyjny pojazdu'],
    vin: scrappedCar['VIN'],
    price: scrappedCar.price,
    type,
    market: 'OTOMOTO',
    link: link,
    mileage: scrappedCar.Przebieg,
    color: scrappedCar.Kolor,
    drive,
    location: scrappedCar['location'],
    year: scrappedCar['Rok produkcji'],
    fuel_type: scrappedCar['Rodzaj paliwa'],
    transmission
  };

  return carToReturn;
};
