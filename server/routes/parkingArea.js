import Router from 'express';
import { getAllParkingAreas, getParkingArea, createParkingArea, updateParkingArea, deleteParkingArea} from '../controllers/parkingAreaController.js';

const router = Router();

// get
router.get('/', getAllParkingAreas);
router.get('/:id', getParkingArea);

// CRUD, ADMIN ONLY!
router.post('/', createParkingArea);
router.put('/:id', updateParkingArea)
router.delete('/:id', deleteParkingArea);

export default router;