import Router from 'express';
import { createBooking, getAllBookings, 
    getAllBookingsForUser, getBooking,
    editBooking, deleteBooking, checkIntoBooking, 
    checkOutBooking } from '../controllers/bookingController.js';

const router = Router();

router.post('/', createBooking);
router.get('/', getAllBookings);
router.get('/for/:id', getAllBookingsForUser);
router.get('/:id', getBooking);
router.put('/:id', editBooking);
router.delete('/:id', deleteBooking);

// extra routes
router.put('/checkin/:id', checkIntoBooking);
router.put('/checkout/:id', checkOutBooking);

export default router;