import { useEffect, useState } from 'react'
import './Offers.scss';
import Header from "../../components/header/Header";
import ArteonImg from '../../images/HomePage/arteon.png'
import DropDown from '../../components/common/dropdown/DropDown';
import Button from '../../components/common/button/Button';
import axios from 'axios'
import { CarType } from '../../utils/models/Car';
import { getAllGenerationsForModel, getAllModelsForBrand, getRejectedCars } from '../../utils/apis/CarsApi';
import CarCard from '../../components/Cards/CarCard/CarCard';
import TextInput from '../../components/common/input/TextInput';

const OffersPage = () =>  {
  const [ cars, setCars ] = useState<Array<CarType>>([]);
  const [ filters, setFilters ] = useState<any>();
  const [ filteredCars, setFilteredCars ] = useState<Array<CarType>>(cars)
  const [ brands, setBrands ] = useState([])
  const [ models, setModels ] = useState([])
  const [ generations, setGenerations ] = useState([])


  const handleFilterEditing = (option:any, placeholder:string) => {
    setFilters({...filters, [placeholder]: option.name})
  }

  const handleFilterInputChange = (e:any) => {
    setFilters({...filters, [e.target.name]:e.target.value})
  }


  const handleReset = () => {
    setFilters(undefined)
    setFilteredCars(cars);
    setModels([])
    setGenerations([])
  }

  const handleFilter = () => {
    console.log(filters, cars);  
    let filteredCars:Array<any> = [...cars];  

    if(filters?.brand) {
      filteredCars = filteredCars.filter((car) => {
        return car.CarBrand.name === filters.brand
      });
    }

    if( filters?.models ) {
      filteredCars = filteredCars.filter((car) => {
        return car.CarModel.name === filters.model
      })
    }

    if ( filters?.generations ) {
      filteredCars = filteredCars.filter((car) => {
        return car.CarGeneration.name = filters.generation;
      })
    }

    if ( filters.fuel ) {
      filteredCars = filteredCars.filter((car) => {
        return car.Engine.fuel_type = filters.fuel;
      })
    }

    if ( filters.drive )  {
      filteredCars = filteredCars.filter((car) => {
        return car.drive = filters.drive;
      })
    }

    if ( filters.gearbox )  {
      filteredCars = filteredCars.filter((car) => {
        return car.transmission = filters.gearbox;
      })
    }

    if ( filters?.maxPrice &&  filters?.maxPrice !== '' ) {
      filteredCars = filteredCars.filter((car) => {
        return car.price <= filters.maxPrice;
      })
    }

    if ( filters?.minPrice && filters?.minPrice !== '' ) {
      filteredCars = filteredCars.filter((car) => {
        return car.minPrice >= filters.minPrice;
      })
    }

    if ( filters?.maxYear && filters?.maxYear !== '' ) {
      filteredCars = filteredCars.filter((car) => {
        return car.year <= filters.maxYear;
      })
    }

    if ( filters?.minYear && filters?.minYear !== '' ) {
      filteredCars = filteredCars.filter((car) => {
        return car.year >= filters.minYear;
      })
    }

    if ( filters?.minPower && filters?.minPower !== '' ) {
      filteredCars = filteredCars.filter((car) => {
        return car.Engine.power >= filters.minPower;
      })
    }

    if ( filters?.maxPower && filters?.maxPower !== '' ) {
      filteredCars = filteredCars.filter((car) => {
        return car.Engine.power <= filters.maxPower;
      })
    }

    setFilteredCars(filteredCars)

  }

  useEffect(() => {
    console.log(filters)
    if (filters?.brand) {
      getAllModelsForBrand(filters.brand).then((res:any) => {
        setModels(res);
      });
    }

    if( filters?.model ) {
      getAllGenerationsForModel(filters.model).then((res:any) => {
        console.log(res)
        setGenerations(res);
      })
    }

  }, [filters])


  useEffect(() => {
    getRejectedCars().then((res) => {
      setCars(res.rejectedCars);
      setFilteredCars(res.rejectedCars);
    });
    
    axios.get(`${process.env.REACT_APP_API_URL}/cars/brands`).then((res:any) => {
      setBrands(res.data)
    });

  }, [])

  return(
    <div className='offers'>
      <Header/>
      <div className='offers-wrapper'>
        <div className='offers-wrapper-filter'>
          <div className='offers-wrapper-filter-form'>
              <DropDown placeholder='brand' options={brands} setOuterOptions={handleFilterEditing}></DropDown>
              <DropDown placeholder='model' options={models} setOuterOptions={handleFilterEditing}></DropDown>
              <DropDown placeholder='generation' options={generations} setOuterOptions={handleFilterEditing}></DropDown>
              <DropDown placeholder='fuel' options={[{id: 1, name: 'Benzyna'}, {id: 2, name: 'Diesel'}]} setOuterOptions={handleFilterEditing}></DropDown>
              <DropDown placeholder='drive' options={[{id: 0, name: 'All'}, {id: 1, name: 'Front' },{id: 2, name: 'Rear'}]} setOuterOptions={handleFilterEditing}></DropDown>
              <DropDown placeholder='gearbox' options={[{id: 0, name: 'Auto'}, {id: 1, name: 'Manual'}]} setOuterOptions={handleFilterEditing}></DropDown>
              <TextInput name='minPrice' style={{ width: '40%' }} placeholder='Min Price' value={filters?.minPrice} onChange={handleFilterInputChange}  />
              <TextInput name='maxPrice' style={{ width: '40%' }} placeholder='Max Price' value={filters?.maxPrice} onChange={handleFilterInputChange} />
              <TextInput name='minPower' style={{ width: '40%' }}placeholder='Min Power' value={filters?.minPower} onChange={handleFilterInputChange} />
              <TextInput name='maxPower' style={{ width: '40%' }} placeholder='Max Power' value={filters?.maxPower} onChange={handleFilterInputChange} />
              <TextInput name='minYear' style={{ width: '40%' }} placeholder='Min Year' value={filters?.minYear} onChange={handleFilterInputChange} />
              <TextInput name='maxYear' style={{ width: '40%' }} placeholder='Max Year' value={filters?.maxYear} onChange={handleFilterInputChange} />
              <Button type={true} name="Filter" onClick={handleFilter}></Button>
              <Button type={true} name="Reset" onClick={handleReset}></Button>
          </div>
          <div className='offers-wrapper-filter-image'>
            <img src={ArteonImg}></img>
          </div>
        </div>
        <div className='offers-wrapper-cars'>
          { [...filteredCars || []].map((car:CarType, index:number) => {
            return(
              <div key={index}>
                <CarCard car={car}></CarCard>
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  )
}

export default OffersPage;