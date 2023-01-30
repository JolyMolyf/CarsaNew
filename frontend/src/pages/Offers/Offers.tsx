import { useEffect, useState } from 'react';
import './Offers.scss';
import Header from '../../components/header/Header';
import ArteonImg from '../../images/HomePage/arteon.png';
import DropDown from '../../components/common/dropdown/DropDown';
import Button from '../../components/common/button/Button';
import axios from 'axios';
import { CarType } from '../../utils/models/Car';
import { getAllGenerationsForModel, getAllModelsForBrand, getRejectedCars } from '../../utils/apis/CarsApi';
import CarCard from '../../components/Cards/CarCard/CarCard';
import TextInput from '../../components/common/input/TextInput';
import { useSelector } from 'react-redux';

const OffersPage = () => {
  const [cars, setCars] = useState<Array<CarType>>([]);
  const [filters, setFilters] = useState<any>();
  const [filteredCars, setFilteredCars] = useState<Array<CarType>>(cars);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [generations, setGenerations] = useState([]);

  const userId = useSelector((appState: any) => appState.user.user?.Person?.id || appState.user?.user?.person_id);

  const handleFilterEditing = (option: any, placeholder: string) => {
    setFilters({ ...filters, [placeholder]: option.name });
  };

  const handleFilterInputChange = (e: any) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters(undefined);
    setFilteredCars(cars);
    setModels([]);
    setGenerations([]);
  };

  const handleFilter = () => {
    let filteredCars: Array<any> = [...cars];

    if (filters?.brand) {
      filteredCars = filteredCars.filter((car) => {
        return car.CarBrand.name === filters.brand;
      });
    }

    if (filters?.model) {
      filteredCars = filteredCars.filter((car) => {
        return car.CarModel.name === filters.model;
      });
    }

    if (filters?.generation) {
      filteredCars = filteredCars.filter((car) => {
        return car.CarGeneration.name === filters.generation;
      });
    }

    if (filters?.fuel) {
      filteredCars = filteredCars.filter((car) => {
        return car.Engine.fuel_type === filters.fuel;
      });
    }

    if (filters?.drive) {
      filteredCars = filteredCars.filter((car) => {
        return car.drive === filters.drive;
      });
    }

    if (filters?.transmission) {
      filteredCars = filteredCars.filter((car) => {
        return car.transmission === filters.transmission;
      });
    }

    if (filters?.maxPrice && filters?.maxPrice !== '') {
      filteredCars = filteredCars.filter((car) => {
        return car.price <= filters.maxPrice;
      });
    }

    if (filters?.minPrice && filters?.minPrice !== '') {
      filteredCars = filteredCars.filter((car) => {
        return car.price >= filters.minPrice;
      });
    }

    if (filters?.maxYear && filters?.maxYear !== '') {
      filteredCars = filteredCars.filter((car) => {
        return car.year <= filters.maxYear;
      });
    }

    if (filters?.minYear && filters?.minYear !== '') {
      filteredCars = filteredCars.filter((car) => {
        return car.year >= filters.minYear;
      });
    }

    if (filters?.minPower && filters?.minPower !== '') {
      filteredCars = filteredCars.filter((car) => {
        return car.Engine.power >= filters.minPower;
      });
    }

    if (filters?.maxPower && filters?.maxPower !== '') {
      filteredCars = filteredCars.filter((car) => {
        return car.Engine.power <= filters.maxPower;
      });
    }

    setFilteredCars(filteredCars);
  };

  useEffect(() => {
    if (filters?.brand) {
      getAllModelsForBrand(filters.brand).then((res: any) => {
        setModels(res);
      });
    }

    if (filters?.model) {
      getAllGenerationsForModel(filters.model).then((res: any) => {
        setGenerations(res);
      });
    }
  }, [filters]);

  useEffect(() => {
    getRejectedCars().then((res) => {
      setCars(res.rejectedCars);
      setFilteredCars(res.rejectedCars);
    });

    axios.get(`${process.env.REACT_APP_API_URL}/cars/brands`).then((res: any) => {
      setBrands(res.data);
    });
  }, []);

  return (
    <div className="offers">
      <Header />
      <div className="offers-wrapper">
        <div className="offers-wrapper-filter">
          <div className="offers-wrapper-filter-form">
            <DropDown
              placeholder="brand"
              options={brands}
              onChange={handleFilterEditing}
              outerOption={filters?.brand}></DropDown>
            <DropDown
              placeholder="model"
              options={models}
              onChange={handleFilterEditing}
              outerOption={filters?.model}></DropDown>
            <DropDown
              placeholder="generation"
              options={generations}
              onChange={handleFilterEditing}
              outerOption={filters?.generation}></DropDown>
            <DropDown
              placeholder="fuel"
              options={[
                { id: 1, name: 'Benzyna' },
                { id: 2, name: 'Diesel' },
                { id: 3, name: 'Hybryda' },
                { id: 4, name: 'Elektryczny' }
              ]}
              outerOption={filters?.fuel}
              onChange={handleFilterEditing}></DropDown>
            <DropDown
              placeholder="drive"
              options={[
                { id: 0, name: '4X4' },
                { id: 1, name: 'Na przednie kola' },
                { id: 2, name: 'Na tylne kola' }
              ]}
              outerOption={filters?.drive}
              onChange={handleFilterEditing}></DropDown>
            <DropDown
              placeholder="transmission"
              options={[
                { id: 0, name: 'Automatyczna' },
                { id: 1, name: 'Manualna' }
              ]}
              outerOption={filters?.transmission}
              onChange={handleFilterEditing}></DropDown>
            <TextInput
              name="minPrice"
              style={{ width: '40%' }}
              placeholder="Min Price"
              value={filters?.minPrice}
              onChange={handleFilterInputChange}
            />
            <TextInput
              name="maxPrice"
              style={{ width: '40%' }}
              placeholder="Max Price"
              value={filters?.maxPrice}
              onChange={handleFilterInputChange}
            />
            <TextInput
              name="minPower"
              style={{ width: '40%' }}
              placeholder="Min Power"
              value={filters?.minPower}
              onChange={handleFilterInputChange}
            />
            <TextInput
              name="maxPower"
              style={{ width: '40%' }}
              placeholder="Max Power"
              value={filters?.maxPower}
              onChange={handleFilterInputChange}
            />
            <TextInput
              name="minYear"
              style={{ width: '40%' }}
              placeholder="Min Year"
              value={filters?.minYear}
              onChange={handleFilterInputChange}
            />
            <TextInput
              name="maxYear"
              style={{ width: '40%' }}
              placeholder="Max Year"
              value={filters?.maxYear}
              onChange={handleFilterInputChange}
            />
            <Button type={true} name="Filter" onClick={handleFilter}></Button>
            <Button type={true} name="Reset" onClick={handleReset}></Button>
          </div>
          <div className="offers-wrapper-filter-image">
            <img src={ArteonImg}></img>
          </div>
        </div>
        <div className="offers-wrapper-cars">
          {filteredCars.length === 0 ? 'No cars found that satisfy your filter' : ''}
          {[...(filteredCars || [])].map((car: CarType, index: number) => {
            const orderId = car.car_order.find((car_order: any) => {
              return car_order.client_id === userId;
            })?.id;
            return (
              <div key={index}>
                <CarCard car={car} orderId={orderId || 'Unknown'}></CarCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
