import { Router } from 'express';
import locationControler from '../controllers/locationController';


const router = Router();

router.get('', locationControler.getAllExistingLocations);


export default router;
