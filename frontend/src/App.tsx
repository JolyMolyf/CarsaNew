import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from './pages/About/About';
import OffersPage from './pages/Offers/Offers';
import LoginPage from './pages/Login/Login';
import RegisterPage from './pages/Register/Register';
import CarSelectorDashboard from './pages/CarSelector/Dashboard/CarSelectorDashboard';
import OrderWithConfigurationDetails from './pages/CarSelector/OrderDetails/OrderWithConfigurationDetails';
import AddCarConfiguration from './pages/CarSelector/AddCarConfiguration/AddCarConfiguration';
import ClientDashboard from './pages/ClientPage/Dashboard/ClientDashboarsd';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import TechnicianDashboard from './pages/Technitian/Dashboard/TeachnitianDashboard';
import CreateReport from './pages/Technitian/Reports/CreateReport/CreateReport';
import EditCar from './pages/Car/EditCar';
import CreateOrder from './pages/Order/CreateOrder';
import ClientOrder from './pages/ClientPage/Orders/ClientOrders';
import ClientPayments from './pages/ClientPage/Payments/ClientPayments';
import CarSelectorAddCar from './pages/CarSelector/CarSelectorAddCar';

enum Roles {
  CLIENT = 'Client',
  MANAGER = 'manager',
  TECHNICIAN =  'technician',
  CARSELECTOR = 'carselector'
}

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/offers' element={<OffersPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        
        {/* Protected Routes  */}

        <Route  element={<ProtectedRoute allowedRoles={ [ Roles.CARSELECTOR ] }/>}>
          <Route path='/carselector/dashboard'  element={<CarSelectorDashboard/>}/>
          <Route path='/carselector/car/add/:configurationId' element={<CarSelectorAddCar/>} />
        </Route>
        
        <Route  element={<ProtectedRoute allowedRoles={ [ Roles.TECHNICIAN ] }/>}>
          <Route path='/technician/dashboard' element={<TechnicianDashboard/>}/>
          <Route path='/technician/report/add/:id/:carId' element={<CreateReport/>}/>
        </Route>
        
        <Route path='/car/edit/:id' element={<EditCar/>} />

        <Route element={<ProtectedRoute allowedRoles={ [ Roles.CLIENT ] }/>}>
          <Route path='/client/dashboard' element={<ClientDashboard/>} />
          <Route path='/client/orders' element={<ClientOrder/>} />
          <Route path='client/payments' element={<ClientPayments/>} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={ [ Roles.CLIENT, Roles.TECHNICIAN, Roles.CARSELECTOR ] } />}>
          <Route path='/order/create' element={<CreateOrder/>}/>
          <Route path='/order/details/:id' element={<OrderWithConfigurationDetails/>}/>
          <Route path='/order/add/configuration/:id' element={<AddCarConfiguration showHeader={true}/>}/>
        </Route>
        
        <Route path="*" element={<Navigate to="/home"/>} />
      </Routes>
    </Router>
  );
}

export default App;
