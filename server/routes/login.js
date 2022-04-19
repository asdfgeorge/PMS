import Router from 'express';
import { loginPost } from '../controllers/login.js';

const router = Router();

router.post('/', loginPost);

export default router;