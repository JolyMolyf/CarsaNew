import puppeteer from 'puppeteer';
import { convertScrappedDataToCar } from './carConvertor';
import { findCarName, findEngineByCharacteristics } from '../helpers/carHelpers';
import { getLocationByState } from '../helpers/locationHelper';

export const scrapOtoCar = async (link: string) => {
  const OTOMOTO_URL_PATTERN = /^https:\/\/www\.otomoto\.pl\/oferta\/.*$/gi;
  const result: any = {};

  if (!OTOMOTO_URL_PATTERN.test(link)) {
    return { success: false, error: "Provided link doesn't match pattern" };
  }

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.goto(link);

  const labels: any = await page.evaluate(() => {
    return Array.from(document.getElementsByClassName('offer-params__label')).map((el: any) => el.textContent);
  });

  const photos: any = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.offer-photos-thumbs__item img')).map((el: any) => el.src);
  });

  const values: any = await page.evaluate(() => {
    return Array.from(document.getElementsByClassName('offer-params__value')).map((el: any) => el.textContent);
  });

  const location = await page.evaluate(() => {
    return Array.from(document.getElementsByClassName('seller-card__links__link--address')).map(
      (el: any) => el.textContent
    );
  });

  const price = await page.evaluate(() => {
    return Array.from(document.getElementsByClassName('offer-price__number')).map((el: any) => el.textContent);
  });

  const equipment = await page.evaluate(() => {
    return Array.from(document.getElementsByClassName('offer-features__item')).map((el: any) => {
      return el.textContent.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, '');
    });
  });

  for (let i = 0; i < values.length; i++) {
    result[labels[i]] = values[i].replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, '');
  }

  await browser.close();

  if (Object.entries(result).length === 0) {
    return { error: 'Something went wrong' };
  }

  result['location'] = location[0].replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, '');
  result['price'] = price[0]?.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, '');
  result['images'] = photos.map((image: string) => {
    return image?.split(';')?.[0];
  });

  const bracketsRegExp = /\((.*)\)/;
  let car = convertScrappedDataToCar(result, link);
  const generationPeriod = (result['Generacja'] || '').match(bracketsRegExp)?.[1];

  const engine = await findEngineByCharacteristics(
    result['Moc'],
    result['Pojemność skokowa'],
    result['Rodzaj paliwa'],
    result['Wersja']
  );
  const brandModelGeneration = await findCarName(
    result['Marka pojazdu'],
    result['Model pojazdu'],
    result['Generacja'],
    generationPeriod?.split('-')?.[0],
    generationPeriod?.split('-')?.[1]
  );
  const locationToFind = await getLocationByState(car.location);
  car!['Engine'] = engine;
  car!['CarGeneration'] = brandModelGeneration.generation;
  car!['CarModel'] = brandModelGeneration.model;
  car!['CarBrand'] = brandModelGeneration.brand;
  car.brand_id = brandModelGeneration.brand?.brand_id;
  car.model_id = brandModelGeneration.model.id;
  car.generation_id = brandModelGeneration.generation?.id;
  car.engine_id = engine?.id;
  car.location_id = locationToFind?.id;
  car.price = car.price.replaceAll('PLN', '');
  car.mileage = car.mileage.replaceAll('km', '');

  return car;
};
