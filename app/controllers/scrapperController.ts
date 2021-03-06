import { StatusCodes } from 'http-status-codes';
import { convertScrappedDataToCar } from '../utils/convertors/CarConvertor'
const puppeteer = require('puppeteer');
const carRepository = require('../repositories/carRepository');
import {Request, Response, NextFunction} from 'express'


const scrapCarFromLink = async (req:Request, res:Response, next:NextFunction) => {
  const result:any = {}
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  if(req.headers.link){
      await page.goto(req.headers.link);
      try{
        // await page.click('#onetrust-accept-btn-handler');
      } catch(err){
        console.log('no such btn')      
      }
      

      const labels:any = await page.evaluate(() => {
          return Array.from(document.getElementsByClassName('offer-params__label')).map((el:any) => {
              return el.textContent;
          });
      });

    //   console.log(labels);

      const photos:any =  await page.evaluate(() => {
          let images = Array.from(document.querySelectorAll('.offer-photos-thumbs__item img')).map((el:any) => {
              return el.src
          });
          return images;
      })

    
      const values:any = await page.evaluate(() => {
          return Array.from(document.getElementsByClassName('offer-params__value')).map((el:any) => {
              return el.textContent;
          });
      });

    //   console.log(values)

      const location = await page.evaluate(() => {
          return Array.from(document.getElementsByClassName('seller-card__links__link--address')).map((el:any) => {
              return el.textContent
          })
      })

      const price = await page.evaluate(() => {
          return Array.from(document.getElementsByClassName('offer-price__number')).map((el:any) => {
              return el.textContent
          });
      })

    //   console.log(price)

      const equipment = await page.evaluate(() => {
        return Array.from(document.getElementsByClassName('offer-features__item')).map((el:any) => {
          return el.textContent.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, '');
        });
    })


      for( let i = 0; i < values.length; i++){
          result[labels[i]] = values[i].replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, '');
      }

      await browser.close();
      console.log('res: ', result)
      
      if(Object.entries(result).length === 0){
          res.json(StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE);
      }

      result['location'] = location[0].replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, '');
      result['price'] = price[0]?.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, '');
      result['images'] = photos.map((image:string)=>{
          return image?.split(';')?.[0]
      });

      const bracketsRegExp = /\((.*)\)/; 
      let car = convertScrappedDataToCar(result, req.headers.link as string);
      const generationPeriod = (result['Generacja'] || '').match(bracketsRegExp)?.[1];

      const engine = await carRepository.findEngineByCharacteristics(result['Moc'], result['Pojemno???? skokowa'], result['Rodzaj paliwa'], result['Wersja'])
      const carGeneration = await carRepository.findCarName(result['Marka pojazdu'], result['Model pojazdu'], result['Generacja'], generationPeriod?.split('-')?.[0], generationPeriod?.split('-')?.[1])



      car!['engine_id'] = engine.id
      car!['CarGeneration'] = carGeneration;
      console.log(car)
      res.json(car)
  } else {
      res.json(StatusCodes.SERVICE_UNAVAILABLE)
  }
}


export default {
  scrapCarFromLink
}