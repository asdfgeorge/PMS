import Router from 'express';
import { getAllParkingSpaces, getParkingSpace, createParkingSpace, updateParkingSpace, deleteParkingSpace} from '../controllers/parkingSpaceController.js';

const router = Router();

// get
router.get('/', getAllParkingSpaces);
router.get('/:id', getParkingSpace);

// CRUD, ADMIN ONLY!
router.post('/', createParkingSpace);
router.put('/:id', updateParkingSpace)
router.delete('/:id', deleteParkingSpace);

export default router;