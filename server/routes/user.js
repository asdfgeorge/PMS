import Router from 'express';
import { editUser, getAllUsers, getUser, deleteUser } from '../controllers/userController.js';

const router = Router();

router.get('/', getAllUsers);
router.put('/:id', editUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);


export default router;